<template>
  <!-- PAGE TITLE -->
  <div>
     <!-- PAGE TITLE -->
    <section class="pageTitle" style="background-image:url(/img/alquileres/stars.jpg);">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="titleTable">
              <div class="titleTableInner">
                <div class="pageTitleInfo">
                  <h1>Nuestra flota</h1>
                  <p>¿Te gustaría dormir en un hotel de un millón de estrellas?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
                  :src="require('~/assets/Vehiculos/YEVANA_' + vehiculo.VehiculoID + '.jpg')"
                  alt="Furgoneta Yevana para alquilar"
                  @click="goToVehicle(vehiculo.VehiculoID)"
                />
                <div v-if="!$device.isMobile" class="maskingInfo">
                  <h4>{{vehiculo.Nombre}}</h4>
                  <p>{{vehiculo.Familia + ' ' + ( vehiculo.Familia == 'Mercedes' ? 'Vito' : 'Transporter' )}}</p>
                  <a
                    v-if="vehiculo.Disponible"
                    :href="'/furgoneta/' + vehiculo.VehiculoID"
                    class="btn buttonTransparent"
                  >Ver Más</a>
                </div>
              </div>
              <!-- <a class="media-left fancybox-pop" href="img/packages/package-list-01.jpg">
                <img class="media-object"  :src="require('~/assets/Vehiculos/YEVANA_' + vehiculo.VehiculoID + '.jpg')" alt="Image">
              </a>-->
              <div class="media-body">
                <div class="bodyLeft">
                  <h4 class="media-heading">
                    <a :href="'/furgoneta/' + vehiculo.VehiculoID">{{vehiculo.Nombre}}</a>
                    <span
                      v-if="$device.isMobile && vehiculo.Disponible"
                      style="font-size: 12px; color: orange; font-weight: bold; float: right"
                    >DESDE {{vehiculo.PreciosActuales.find(pr => pr.Temporada === 'Baja').Precio}}€</span>
                  </h4>

                  <!--DESCRIPCIÓN-->
                  <div v-if="!$device.isMobile">
                    <p>{{vehiculo.DescripcionCorta}}</p>
                    <hr style="margin-top: 6px; margin-bottom: 6px" />
                  </div>

                  <!--CARACTERÍSTICAS TÉCNICAS-->
                  <div class="row">
                    <div class="col-md-6">
                      <span class>
                        <!-- <img
                        src="../img/icons/van.png"
                        width="21"
                        height="21"
                        style="margin-right: 7px"
                        />-->
                        <span class="vehicle-prop">Marca:</span>
                        {{vehiculo.Familia}}
                      </span>
                    </div>
                    <div class="col-md-6">
                      <span class>
                        <!-- <img
                        src="../img/icons/modelo.png"
                        width="21"
                        height="21"
                        style="margin-right: 7px; margin-left: -2px"
                        />-->
                        <span class="vehicle-prop">Modelo:</span>
                        : {{ vehiculo.Familia == 'Mercedes' ? 'Vito' : 'Transporter' }}
                      </span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <span class>
                        <!-- <img
                        src="../img/icons/motor.png"
                        width="21"
                        height="21"
                        style="margin-right: 7px"
                        />-->
                        <span class="vehicle-prop">Motor:</span>
                        : {{vehiculo.FichaTecnica.Motor}}
                      </span>
                    </div>
                    <div class="col-md-6">
                      <span class>
                        <!-- <img
                        src="../img/icons/combustible.png"
                        width="19"
                        height="19"
                        style="margin-right: 7px"
                        />-->
                        <span class="vehicle-prop">Combustible:</span>
                        : {{vehiculo.FichaTecnica.Combustible}}
                      </span>
                    </div>
                  </div>
                  <div v-if="!$device.isMobile" class="row top-row2">
                    <div class="col-md-6">
                      <span class>
                        <!-- <img
                        src="../img/icons/asientos.png"
                        width="19"
                        height="19"
                        style="margin-right: 7px"
                        />-->
                        <span class="vehicle-prop">Plazas:</span>
                        : {{vehiculo.FichaTecnica.NumeroAsientos}}
                      </span>
                    </div>
                    <div class="col-md-6">
                      <span class>
                        <!-- <img
                        src="../img/icons/plazas_dormir.png"
                        width="21"
                        height="21"
                        style="margin-right: 7px"
                        />-->
                        <span class="vehicle-prop">Camas:</span>
                        : {{vehiculo.FichaTecnica.PlazasDormir}}+1
                      </span>
                    </div>
                  </div>
                  <hr v-if="!$device.isMobile" style="margin-top: 6px; margin-bottom: 6px" />

                  <!--SECCION ITEMS EQUIPAMIENTO-->
                  <!-- <div class="row">
                  <div
                    ng-repeat="extra in vehiculo.FichaTecnica.EquipamientoItems"
                    ng-if="listaExtrasMostrar.indexOf(extra.Nombre) != -1"
                    class="col-md-6"
                  >
                    <div ng-class="{'top-row2': $index >= 2}">
                      <img
                        ng-src="{{'../img/icons/' + utilidadesService.cleanString(extra.Nombre) + '.png'}}"
                        width="19"
                        height="19"
                        style="margin-right: 7px"
                      />
                      {{extra.Nombre}}
                    </div>
                  </div>
                  </div>-->
                </div>
                <div v-if="!$device.isMobile" class="bodyRight">
                  <div class="bookingDetails">
                    <p style="margin-bottom: 20px">Desde</p>
                    <h2
                      style="margin-bottom: 40px; font-size: 40px"
                    >{{vehiculo.PreciosActuales.find(pr => pr.Temporada === 'Baja').Precio}}€</h2>
                    <a
                      v-if="vehiculo.Disponible"
                      :href="'/furgoneta/' + vehiculo.VehiculoID"
                      class="btn btn-block buttonTransparent top-row8"
                    >Ver</a>
                    <!--<span ng-if="!vehiculo.Disponible" class="top-row8">Próximamente</span>-->
                  </div>
                </div>
                <!-- <span
                v-else
                style="font-size: 15px; color: orange; font-weight: bold; margin-top: 10px"
                >DESDE {{vehiculo.PreciosActuales.find(pr => pr.Temporada === 'Baja').Precio}}€</span>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import VehicleService from "~/services/VehicleService";
export default {
  data() {
    return {
      vehicles: []
    };
  },
  mounted() {
    this.getVehicles();
  },
  methods: {
    async getVehicles() {
      this.vehicles = await VehicleService.getAll();
    },
    goToVehicle(id) {
      this.$router.push({
        path: `/furgoneta/${id}`
      })
    }
  }
};
</script>
<style scoped>
.relatedItem {
  margin-bottom: 0px;
}
/* .media-body > span {
  font-weight: bold;
} */
.vehicle-prop {
  font-weight: bold;
}
</style>

