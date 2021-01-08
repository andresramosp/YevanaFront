<template>
  <!-- PAGE TITLE -->
  <div>
    <!-- PAGE TITLE -->

    <section class="mainContentSection packagesSection">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <!--LISTA DE VEHÍCULOS-->
            <div style="text-align: justify; margin-bottom: 25px">
              Nuestra flota cuenta con las mejores furgonetas campers de
              alquiler de Madrid. Camperizaciones únicas en diseño, calidad y
              equipamiento. Todas nuestras campers cuentan con placa solar,
              calefacción estacionaria y ducha. Nuestra gama dispone de una gran
              variedad de tamaños, accesorios y extras para configurar todo tipo
              de experiencias. Tanto si te gusta el entorno rural como la
              naturaleza más indómita, o eres un fan de los festivales, aquí
              encontrarás tu campervan perfecta. Y al regreso, si te has
              enamorado de nuestra camper, siempre podrás hacerla tuya...
              <span v-show="!$device.isMobile">
                Y al regreso, si te has enamorado de nuestra camper, siempre
                podrás hacerla tuya...
              </span>
            </div>
            <div
              v-for="vehiculo in vehiclesList"
              :key="vehiculo.VehiculoID"
              class="media packagesList"
            >
              <!--IMAGEN-->
              <div class="relatedItem media-left">
                <img
                  style="
                    display: block;
                    width: 100%;
                    max-width: 400px;
                    min-height: 260px;
                  "
                  :src="'/img/vehiculos/YEVANA_' + vehiculo.VehiculoID + '.jpg'"
                  :alt="`Furgoneta Camper ${getModeloName(
                    vehiculo
                  )} camperizada por Yevana para alquiler o venta en Madrid`"
                  @click="goToVehicle(vehiculo)"
                />
                <div v-show="!$device.isMobile" class="maskingInfo">
                  <h4>{{ vehiculo.Nombre }}</h4>
                  <p>
                    {{
                      vehiculo.Familia +
                      " " +
                      (vehiculo.Familia == "Mercedes" ? "Vito" : "Transporter")
                    }}
                  </p>
                  <nuxt-link
                    v-show="vehiculo.Disponible"
                    :to="
                      `${
                        mode == 'venta'
                          ? '/furgoneta-camper-venta/'
                          : '/furgoneta-camper/'
                      }` + vehiculo.VehiculoID
                    "
                    class="btn buttonTransparent"
                    >Ver Más</nuxt-link
                  >
                </div>
              </div>
              <div class="media-body">
                <div class="bodyLeft">
                  <h3
                    class="media-heading"
                    style="margin-bottom: 10px; font-size: 21px"
                  >
                    <nuxt-link
                      v-if="vehiculo.Disponible"
                      :to="
                        `${
                          mode == 'venta'
                            ? '/furgoneta-camper-venta/'
                            : '/furgoneta-camper/'
                        }` + vehiculo.VehiculoID
                      "
                    >
                    </nuxt-link>
                    <span
                      v-show="
                        $device.isMobile &&
                        vehiculo.Disponible &&
                        mode != 'venta'
                      "
                      style="
                        font-size: 12px;
                        color: orange;
                        font-weight: bold;
                        float: right;
                      "
                      >DESDE
                      {{
                        vehiculo.PreciosActuales.find(
                          (pr) => pr.Temporada === "Baja"
                        ).Precio
                      }}€</span
                    >
                  </h3>

                  <!--DESCRIPCIÓN-->
                  <div v-show="!$device.isMobile">
                    <p>{{ vehiculo.DescripcionCorta }}</p>
                    <hr style="margin-top: 6px; margin-bottom: 6px" />
                  </div>

                  <!--CARACTERÍSTICAS TÉCNICAS-->
                  <div class="row">
                    <div class="col-md-6">
                      <span class>
                        <img
                          :src="require('~/assets/icons/furgo.png')"
                          width="19"
                          height="19"
                          style="margin-right: 5px"
                          alt="Icono Furgoneta"
                        />
                        <!-- <span class="vehicle-prop">Furgo:</span> -->
                        Modelo
                        {{ vehiculo.FichaTecnica.MarcaModelo }}
                      </span>
                    </div>
                    <div class="col-md-6">
                      <span class>
                        <img
                          :src="require('~/assets/icons/motor.png')"
                          width="19"
                          height="19"
                          style="margin-right: 5px"
                          alt="Icono Motor"
                        />
                        Motor de
                        <!-- <span class="vehicle-prop">Motor:</span> -->
                        {{ vehiculo.FichaTecnica.Motor }}
                      </span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <span class>
                        <img
                          :src="require('~/assets/icons/asiento.png')"
                          width="19"
                          height="19"
                          style="margin-right: 5px"
                          alt="Icono Asiento"
                        />
                        <!-- <span class="vehicle-prop">Plazas Viaje:</span> -->
                        {{ vehiculo.FichaTecnica.NumeroAsientos }} plazas de
                        viaje
                      </span>
                    </div>
                    <div class="col-md-6">
                      <span class>
                        <img
                          :src="require('~/assets/icons/cama.png')"
                          width="19"
                          height="19"
                          style="margin-right: 5px"
                          alt="Icono Cama"
                        />
                        <!-- <span class="vehicle-prop">Plazas dormir:</span> -->
                        2 + 1 plazas para dormir
                      </span>
                    </div>
                  </div>
                  <div v-show="!$device.isMobile" class="row top-row2">
                    <div class="col-md-6">
                      <span class>
                        <img
                          :src="require('~/assets/icons/dimensiones.png')"
                          width="19"
                          height="19"
                          style="margin-right: 5px"
                          alt="Icono Tamaño"
                        />
                        <!-- <span class="vehicle-prop">Dimensiones:</span> -->
                        {{ vehiculo.FichaTecnica.Tamanio }}
                      </span>
                    </div>
                    <div class="col-md-6">
                      <span class>
                        <img
                          :src="require('~/assets/icons/combustible.png')"
                          width="19"
                          height="19"
                          style="margin-right: 5px"
                          alt="Icono Combustible"
                        />
                        <!-- <span class="vehicle-prop">Consumo:</span> -->
                        Consume
                        {{ vehiculo.FichaTecnica.Consumo }}
                      </span>
                    </div>
                  </div>
                  <hr
                    v-show="!$device.isMobile"
                    style="margin-top: 6px; margin-bottom: 6px"
                  />
                  <!-- <div v-if="!$device.isMobile && mode == 'compra'" style="text-align: center; padding-top: 5px">
                    <nuxt-link 
                      :to="'/furgoneta-camper/' + vehiculo.VehiculoID"
                      class="btn buttonTransparent btn-orange-solid" style="float: left">
                      ver ficha
                  </nuxt-link>
                  </div> -->
                </div>
                <div v-if="!$device.isMobile" class="bodyRight">
                  <div class="bookingDetails">
                    <div v-if="mode == 'alquiler'">
                      <p style="margin-bottom: 20px">Desde</p>
                      <p style="margin-bottom: 40px; font-size: 40px">
                        {{
                          vehiculo.PreciosActuales.find(
                            (pr) => pr.Temporada === "Baja"
                          ).Precio
                        }}€
                      </p>
                      <nuxt-link
                        v-show="vehiculo.Disponible"
                        :to="
                          `${
                            mode == 'venta'
                              ? '/furgoneta-camper-venta/'
                              : '/furgoneta-camper/'
                          }` + vehiculo.VehiculoID
                        "
                        class="btn btn-block buttonTransparent top-row8"
                        >Ver</nuxt-link
                      >
                    </div>
                    <div v-else style="margin-top: 63px">
                      <nuxt-link
                        :to="
                          `${
                            mode == 'venta'
                              ? '/furgoneta-camper-venta/'
                              : '/furgoneta-camper/'
                          }` + vehiculo.VehiculoID
                        "
                        class="btn btn-block buttonTransparent"
                        >Ficha</nuxt-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="sectionTitle">
          <h2 style="font-size: 20px; text-align: center">
            <span style="background-color: whitesmoke"
              >Alquilar una furgoneta camper con Yevana tiene muchas
              ventajas:</span
            >
          </h2>
          <br />
          <div style="text-align: justify">
            <ul>
              <li>
                Contamos con una
                <b>amplia flota de furgonetas camperizadas</b> capaz de
                ajustarse a todas tus necesidades. Elige tamaño, color y la
                tarifa que mejor se adapte a ti. ¡Del resto nos encargamos
                nosotros!
              </li>
              <br />
              <li>
                <b>Te asesoramos</b> en tu viaje en furgoneta camper. ¿Qué puedo
                visitar? ¿Dónde puedo pernoctar? Pregúntanos... ¡Nuestro equipo
                te ayudará en la planificación de tu escapada en camper!
              </li>
              <br />
              <li>
                <b>Atención 24 horas</b>. Para nosotros el proceso de alquiler
                termina cuando haya finalizado tu viaje en furgo. Por ello
                queremos brindarte atención personalizada las 24 horas del día.
                ¡Puedes consultarnos tus dudas durante tu viaje a cualquier hora
                del día!
              </li>
              <br />
              <li>
                Nuestro taller y oficinas en Madrid cuentan con una privilegiada
                localización.
                <b>Estamos a sólo 20 minutos del centro de Madrid</b> y a 15
                minutos del aeropuerto Adolfo Suarez.
              </li>
              <br />
              <li>
                Alquila tu furgoneta camperizada en Madrid con total
                tranquilidad. Disponemos de un
                <b>seguro a todo riesgo con asistencia en carretera.</b>
                Además, antes de iniciar tu viaje en camper, te explicaremos al
                detalle todo su funcionamiento. ¡Prepárate para una experiencia
                única!
              </li>
              <br />
              <li>
                Nuestras furgonetas camper están <b>totalmente equipadas</b> para que
                puedas disfrutar de tu deporte favorito sea donde sea. Tanto si
                eres de montaña como de playa no te preocupes por las
                temperaturas: ¡Un innovador sistema de calefacción y aire
                acondicionado hará que te sientas como en casa!
              </li>
              <br />
              <li>
                Tenemos los <b>precios de alquiler más competitivos del mercado.</b>
                Disfruta de la oferta que mejor se ajuste a ti y aprovéchate de
                los descuentos de larga estancia que hemos preparado... ¡Tus
                vacaciones en camper te esperan! única!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import VehicleService from "~/services/vehicleService";
export default {
  components: {},
  props: ["vehicles", "mode"],
  computed: {
    vehiclesList() {
      if (this.mode == "alquiler") {
        return this.vehicles.filter((v) => v.Alquilable);
      } else {
        return this.vehicles.filter((v) => v.Vendible);
      }
    },
  },
  methods: {
    goToVehicle(vehicle) {
      if (this.mode == "alquiler") {
        if (vehicle.Disponible) {
          this.$router.push({
            path: `/furgoneta-camper/${vehicle.VehiculoID}`,
          });
        }
      } else {
        this.$router.push({
          path: `/furgoneta-camper-venta/${vehicle.VehiculoID}`,
        });
      }
    },
    getModeloName(vehiculo) {
      return vehiculo.FichaTecnica.MarcaModelo.replace(
        "MB",
        "Mercedez Benz"
      ).replace("VW", "Volkswagen California Beach");
    },
  },
};
</script>
<style scoped>
.relatedItem {
  margin-bottom: 0px;
}
.vehicle-prop {
  font-weight: bold;
}
ul li {
  list-style-type: circle;
}
/* b {
  color: #ff891e;
} */
</style>

