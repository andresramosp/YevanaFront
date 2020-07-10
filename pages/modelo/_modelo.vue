<template>
  <div>
    <section>
      <div>
        <video id="myVideo" controls width="100%" allow="autoplay" preload="auto" muted class="autoPlay">
          <source
            src="https://www.dropbox.com/s/7rqsuv14jc5ylf4/videoDockerMobile2.mp4?raw=1"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
    <section class="blackSection">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div style="text-align: center">
              <span v-show="!$device.isMobile">
                <nuxt-link to="/contacto">ENCARGA </nuxt-link>TU NUEVA YEVANA DOKKER MODELO MX56-85
              </span>
              <span v-show="$device.isMobile">
                <nuxt-link to="/contacto">ENCARGA YA </nuxt-link>TU NUEVA YEVANA DOKKER
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="previews-wrap">
      <div v-for="(mosaic, index) in mosaicItems" :key="index">

        <div v-if="!mosaic.backGround" :class="`preview-item ${index % 2 ? 'right-img' : 'false'}`">
          <div :class="`preview-item__content ${index > 0 || !$device.isMobile ? 'fadeableFromBottom' : ''}`">
            <h3>{{mosaic.title}}</h3>
            <p style="margin-top: 5px;">
              <span v-html="mosaic.text"></span>
            </p>
            <div class="icon-list">
              <div class="icon-group" v-for="(icon, index) in mosaic.icons" :key="index">
                <img
                  :src="require('~/assets/icons/' + icon.id.toLowerCase() +'.png')"
                  :width="$device.isMobile ? 37 : 50"
                  :height="$device.isMobile ? 37 : 50"
                />
                <span>{{icon.text}}</span>
              </div>
            </div>
          </div>
          <img :class="`${index % 2 ? 'fadeableFromRight' : 'fadeableFromLeft'}`" alt="car" :src="`/img/modelos/docker/00${index + 1}.jpg`" />
        </div>

        <div v-else :class="`preview-item item-background ${index % 2 ? 'right-img' : 'false'}`">
          <div class="white-band">
            <div class="square col-md-6 fadeableFromBottom">
              <h2>{{mosaic.title}}</h2>
              <p style="margin-top: 15px;">
                <span v-html="mosaic.text"></span>
              </p>
            </div>
            <div class="square col-md-6 fadeableFromBottom">
              <div class="icon-list">
              <div class="icon-group" v-for="(icon, index) in mosaic.icons" :key="index">
                <img
                  :src="require('~/assets/icons/' + icon.id.toLowerCase() +'.png')"
                  :width="$device.isMobile ? 32 : 45"
                  :height="$device.isMobile ? 32 : 45"
                />
                <span v-html="icon.text"></span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <section class="blackSection">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div style="text-align: center">
              <span v-show="!$device.isMobile">
                <nuxt-link to="/contacto">ENCARGA </nuxt-link>TU NUEVA YEVANA DOKKER MODELO MX56-85
              </span>
              <span v-show="$device.isMobile">
                <nuxt-link to="/contacto">ENCARGA YA </nuxt-link>TU NUEVA YEVANA DOKKER
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import State from "~/services/state";
import homeMixins from "~/mixins/homeMixin";
export default {
  components: {},
  mixins: [homeMixins],
  async asyncData({ params }) {
    return {
      modelo: params.modelo,
      mosaicItems: [
        {
          title: "ADAPTARSE ES GANAR TERRENO",
          icons: [
            { id: "gps", text: 'Portátil 5"' },
            { id: "cama", text: "50x80 cm" },
            { id: "cartucho_de_gas", text: "50L" },
            { id: "toalla_grande", text: "1M" }
          ],
          text:
            "Un viaje tiene muchos aspectos y sabemos que el auténtico viajero quiere disfrutarlos todos al máximo. <br/> <br/> Por eso, presentamos nuestro nuevo modelo All-Road: un vehículo que se adapta a todo tipo de viajes"
        },
        {
          title: "EL DESCANSO DE TUS SUEÑOS",
          icons: [
            { id: "asiento", text: 'Portátil 5"' },
            { id: "cama", text: '50x80 cm"' },
            { id: "silla_de_camping", text: "Ikea" }
          ],
          text:
            "<b>Cama</b> doble de 1.95x1.1m, colchoneta estilo japonés ultraﬁna (65mm) confeccionada con 3 capas de diferente densidad, plegable con bisagras de tejido. <br/> <br/>Tapicería a escoger o deﬁnida según personalización."
        },
        {
          title: "ESPACIO PARA TODO TU MUNDO",
          icons: [
            { id: "electricidad", text: "Butsir MS 100 PRO" },
            { id: "radio", text: "Sony FM" }
          ],
          text:
            "Armarios, altillos, compartimentos y baúl con capacidad para 50 litros. <br/> <br/>Brazos neumáticos de asistencia para la apertura de puertas.<br /><br /> Cierres de seguridad Push Lock metálicos."
        },
        {
          title: "UNA ILUMINACIÓN PARA DESCONECTAR",
          icons: [
            { id: "toldo", text: "100 x 500" },
            { id: "portabicis", text: "Acero" },
            { id: "segundo_conductor", text: "C3PO" }
          ],
          text:
            "Iluminación ambiental sectorizada regulable en 3 zonas: Exterior lateral cocina, Exterior zona maletero, interior general (focosDownligth y tira led) Iluminación automática de todos los compartimentos con puertas. <br /> <br /> Foco led de lectura"
        },
        {
          title: "PENSADA PARA VIAJAR, EQUIPADA PARA TODO",
          icons: [
            { id: "electricidad", text: "50V" },
            { id: "radio", text: "Sony FM" }
          ],
          text:
            "Nevera / Congelador Mobicool FR34 a compresor, baja hasta -10ºC. <br /><br />Guías de cajones y tornillería Wurth, tornillería INOX Cocina a Gas de 1 fuego Butsir MS 100 PRO. <br /><br />Compartimento especíﬁco para el gas de la cocina Fregadero INOX, tamaño…  grifo RK Reich STYLE"
        },
        {
          title: "UN LUGAR DONDE RECARGAR ENERGÍAS",
          icons: [
            { id: "pack_dormir", text: "50V" },
            { id: "cocina", text: "Sony FM" }
          ],
          text:
            "Placa solar CARBEST 100W <br />Batería tecnología AGM 120Ah <br />Centralita de control del sistema NASA MARINE <br />Sistema de carga con Booster Votronic de 30A para carga rápida de batería en ruta. <br />Claraboya de climatización Turbovent Premium <br />Cristal 390x390mm con mosquitera integrada y oscurecedor"
        },
        {
          title: "CONVERTIBLE EN ATAÚD, SEGURO FUNERARIO",
          icons: [
            { id: "toldo", text: "100 x 500" },
            { id: "portabicis", text: "Acero" },
            { id: "segundo_conductor", text: "C3PO" }
          ],
          text:
            "Ofrecemos una amplia variedad de extras para que elijas cada detalle de tu camper. <br />Para que disfrutes de todos tus viajes sabiendo que los realizas en un vehículo realmente único. "
        },
        {
          title: "LITERALMENTE, NO HABRÁ OTRA IGUAL",
          backGround: true,
          icons: [
            { id: "toldo", text: "<b>TV led</b> de 16 HD con antena TDT integrada" },
            { id: "portabicis", text: "<b>Calefacción</b> estacionaria de gasoil." },
            { id: "segundo_conductor", text: "<b>Tapicería</b> premiumPO" },
            { id: "pack_dormir", text: "<b>Asientos propios</b> en uno o 2 colores (con o sin microperforado)." },
            { id: "cocina", text: "<b>Acabado bicolor</b> exterior (pintura o vinilado)." }
          ],
          text:
            "Ofrecemos una amplia variedad de extras para que elijas cada detalle de tu camper. <br /><br />Para que disfrutes de todos tus viajes sabiendo que los realizas en un vehículo realmente único. <br/><br/>Iluminación ambiental sectorizada regulable en 3 zonas: Exterior lateral cocina, Exterior zona maletero, interior general (focosDownligth y tira led) Iluminación automática de todos los compartimentos con puertas."
        }
      ]
    };
  },
  mounted() {
    if (process.client) {
      let video = document.querySelector("video");
      video.play();
    }
  },
  created() {
    State.menuOpen = false;
    State.activePage = "Modelos";
    State.menuOpaque = true;
  },
  head() {
    return {
      title: "¡Echa un ojo a nuestro modelo de serie Docker! | YEVANA | Madrid",
      meta: [
        {
          hid: "description-furgo",
          name: "description",
          content: "Diseño de modelos docker"
        }
      ]
    };
  }
};
</script>

<style>
.blackSection {
  margin-top: -6px;
}
.preview-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-background {
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: url("/img/home/homeParalax.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: black;
}
.item-background p {
  color: black !important;
  font-size: 14px;
}
.item-background .icon-group {
  float: none;
  text-align: left;
  margin-bottom: 10px;
}
.item-background .icon-group span {
    display: inline;
    font-size: 13px;
    margin-left: 20px;
    color: black;
    font-weight: 100;
}
.item-background .square {
  padding-left: 60px;
  padding-right: 60px;
}
.preview-item > img {
  width: 50%;
}
img {
  vertical-align: middle;
  border-style: none;
}
.preview-item__content {
  position: relative;
  width: 50%;
  padding: 0 2.1875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.preview-item__content p {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  width: 80%;
  max-width: 100%;
  padding-right: 0.9375rem;
  color: black;
}
.preview-item__content h3 {
  width: 80%;
  max-width: 100%;
  color: #505d68;
  font-weight: bold;
  font-size: 22px;
  line-height: 1.938rem;
  margin-bottom: 0.9375rem;
}

.preview-item.right-img {
  flex-direction: row-reverse;
}

@media (max-width: 991px) {
  .preview-item {
    display: block;
  }
  .preview-item__content {
    width: 100%;
    /* height: 375px; */
    padding-top: 55px;
    padding-bottom: 55px;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .item-background .square {
    padding-left: 25px !important;
    padding-right: 10px !important;
  }
  .preview-item__content h3 {
    font-size: 20px;
    width: 78%;
  }

  .item-background .icon-list {
    margin-top: 60px;
  }

  .preview-item__content p {
    font-size: 13px;
    width: 100%;
    line-height: 20px;
  }

  .preview-item > img {
    width: 100%;
  }

  .icon-group {
    margin-right: 18px !important;
  }
}

@media (max-width: 767px) {
  .preview-item.right-img {
    flex-direction: column;
  }
  .preview-item {
    flex-flow: column nowrap;
  }
}
.icon-list {
  margin-top: 30px;
}
.icon-group {
  float: left;
  text-align: center;
  margin-right: 28px;
}
.icon-group span {
  display: block;
  margin-top: 4px;
  font-size: 11px;
  margin-left: 3px;
  color: black;
  font-weight: 600;
}
.white-band {
  background-color: rgba(255, 255, 255, 0.65);
  padding-top: 50px;
  width: 100%;
  padding-bottom: 50px;
}



</style>
