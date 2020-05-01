<template>
  <div >
    <TopImageBar image="carretera"  />
    <section class="mainContentSection">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-5 col-lg-4 col-xs-12">
            <div class="contactInfo">
              <h2>Te escuchamos</h2>
              <p>En Yevana queremos saber tu opinión. Y si tienes dudas, no dudes en escribirnos, llamarnos o pasarte a vernos por nuestras instalaciones.</p>
              <div class="media">
                <a class="media-left" href="#">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </a>
                <div class="media-body">
                  <h4 class="media-heading">dirección</h4>
                  <p>
                    Calle Mar del Norte 8,
                    <br />San Fernando de Henares
                    <br />28830, Madrid
                  </p>
                </div>
              </div>
              <div class="media">
                <a class="media-left" href="#">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </a>
                <div class="media-body">
                  <h4 class="media-heading">Teléfono</h4>
                  <p>
                    661 713 861
                    <br />616 974 883
                  </p>
                </div>
              </div>
              <div class="media">
                <a class="media-left" href="#">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </a>
                <div class="media-body">
                  <h4 class="media-heading">Escríbenos</h4>
                  <p>
                    <a href="mailTo:info@yevana.com">info@yevana.com</a>
                    <br />
                    <a href="mailTo:reservas@yevana.com">reservas@yevana.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-7 col-xs-12 col-lg-8">
            <div class="contactForm">
              <form v-on:submit.prevent="onSend" role="form" class="form">
                <div class="form-group">
                  <input
                    required
                    type="text"
                    class="form-control"
                    v-model="nombre"
                    placeholder="Tu nombre"
                  />
                </div>
                <div class="form-group">
                  <input
                    required
                    type="email"
                    class="form-control"
                    v-model="email"
                    placeholder="Tu email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    v-model="telefono"
                    placeholder="Tu teléfono"
                  />
                </div>
                <div class="form-group">
                  <textarea required class="form-control" v-model="mensaje" placeholder="Mensaje"></textarea>
                </div>
                <button type="submit" class="btn buttonCustomPrimary">enviar mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- MAP AREA SECTION -->
    <section class="mapArea">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=calle%20mal%20del%20norte%208%2028830&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
          <a href="https://www.embedgooglemap.org">how to embed a google map into wordpress</a>
        </div>
        <style>
  .mapouter {
    position: relative;
    text-align: right;
    height: 500px;
    width: 100%;
  }

  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 500px;
    width: 100%;
  }
        </style>
      </div>
      <!--<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d467453.3147356961!2d90.37215279999992!3d23.748127500000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1452772758249" height="555" frameborder="0" style="border:0" allowfullscreen></iframe>-->
    </section>
  </div>
</template>
<script>
import axios from "axios";
import Vue from "vue";
import TopImageBar from "~/components/TopImageBar.vue";
export default {
  components: {
    TopImageBar
  },
  data() {
    return {
      nombre: "",
      email: "",
      telefono: "",
      mensaje: ""
    };
  },
  methods: {
    onSend() {
      return axios({
        url: process.env.baseUrl + "/api/emailContacto",
        method: "post",
        data: {
          From: this.email,
          To: "info@yevana.com",
          Subject: "Mensaje de " + this.nombre + " (" + this.telefono + ")",
          Body: this.mensaje
        }
      })
        .then(data => {
          Vue.$toast.open({
            message: "Gracias por tu mensaje! Pronto nos pondremos en contacto contigo.",
            position: "bottom",
            type: "success",
            dismissible: true,
            duration: 5000
          });
        })
        .catch(err => {
             Vue.$toast.open({
            message: "Se ha producido un error al enviar el email, por favor revisa los datos.",
            position: "bottom",
            type: "error",
            dismissible: true,
            duration: 5000
          });
        });
    }
  }
};
</script>
<style scoped>
</style>

