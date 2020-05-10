<template>
  <!-- PAGE TITLE -->
  <div>
    <!-- PAGE TITLE -->
    <TopImageBar image="tapiceria" title="Nuestra flota" text="Todas nuestras Camper cuentan con nuevas experiencias de serie" />
    <section class="mainContentSection packagesSection">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <!--LISTA DE VEHÍCULOS-->
            <div v-for="vehiculo in vehicles" :key="vehiculo.VehiculoID" class="media packagesList">
              <!--IMAGEN-->
              <div class="relatedItem media-left">
                <img
                  style="display: block; width: 100%; max-width: 400px"
                  :src="'/img/vehiculos/YEVANA_' + vehiculo.VehiculoID + '.jpg'"
                  alt="Furgoneta Yevana para alquilar"
                  @click="goToVehicle(vehiculo)"
                />
                <div v-show="!$device.isMobile" class="maskingInfo">
                  <h4>{{vehiculo.Nombre}}</h4>
                  <p>{{vehiculo.Familia + ' ' + ( vehiculo.Familia == 'Mercedes' ? 'Vito' : 'Transporter' )}}</p>
                  <nuxt-link
                    v-show="vehiculo.Disponible"
                    :to="'/furgoneta/' + vehiculo.VehiculoID"
                    class="btn buttonTransparent"
                  >Ver Más</nuxt-link>
                </div>
              </div>
              <div class="media-body">
                <div class="bodyLeft">
                  <h4 class="media-heading" style="margin-bottom: 10px">
                    <nuxt-link v-if="vehiculo.Disponible" :to="'/furgoneta/' + vehiculo.VehiculoID">{{vehiculo.Nombre}}</nuxt-link>
                    <span
                      v-show="$device.isMobile && vehiculo.Disponible"
                      style="font-size: 12px; color: orange; font-weight: bold; float: right"
                    >DESDE {{vehiculo.PreciosActuales.find(pr => pr.Temporada === 'Baja').Precio}}€</span>
                  </h4>

                  <!--DESCRIPCIÓN-->
                  <div v-show="!$device.isMobile">
                    <p>{{vehiculo.DescripcionCorta}}</p>
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
                        />
                        Motor de
                        <!-- <span class="vehicle-prop">Motor:</span> -->
                        {{vehiculo.FichaTecnica.Motor}}
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
                        />
                        <!-- <span class="vehicle-prop">Plazas Viaje:</span> -->
                        {{vehiculo.FichaTecnica.NumeroAsientos}} plazas de viaje
                      </span>
                    </div>
                    <div class="col-md-6">
                      <span class>
                        <img
                          :src="require('~/assets/icons/cama.png')"
                          width="19"
                          height="19"
                          style="margin-right: 5px"
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
                        />
                        <!-- <span class="vehicle-prop">Consumo:</span> -->
                        Consume
                        {{vehiculo.FichaTecnica.Consumo}}
                      </span>
                    </div>
                  </div>
                  <hr v-show="!$device.isMobile" style="margin-top: 6px; margin-bottom: 6px" />
                </div>
                <div v-show="!$device.isMobile" class="bodyRight">
                  <div class="bookingDetails">
                    <p style="margin-bottom: 20px">Desde</p>
                    <h2
                      style="margin-bottom: 40px; font-size: 40px"
                    >{{vehiculo.PreciosActuales.find(pr => pr.Temporada === 'Baja').Precio}}€</h2>
                    <nuxt-link
                      v-show="vehiculo.Disponible"
                      :to="'/furgoneta/' + vehiculo.VehiculoID"
                      class="btn btn-block buttonTransparent top-row8"
                    >Ver</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import VehicleService from "~/services/vehicleService";
import TopImageBar from "~/components/TopImageBar.vue";
export default {
  components: {
    TopImageBar
  },
  props: ["vehicles"],
  methods: {
     goToVehicle(vehicle) {
      if (vehicle.Disponible)
      this.$router.push({
        path: `/furgoneta/${vehicle.VehiculoID}`
      })
    }
  }
};
</script>
<style scoped>
.relatedItem {
  margin-bottom: 0px;
}
.vehicle-prop {
  font-weight: bold;
}
</style>

