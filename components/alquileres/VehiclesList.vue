<template>
  <section class="mainContentSection packagesSection">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <!--LISTA DE VEHÍCULOS-->
          <div v-for="vehiculo in vehicles" :key="vehiculo.VehiculoID" class="media packagesList">
            <!--IMAGEN-->
            <div class="relatedItem media-left">
              <img
                style="width: 400px; height: 300px"
                :src="require('~/assets/Vehiculos/YEVANA_' + vehiculo.VehiculoID + '.jpg')"
                alt="Furgoneta Yevana para alquilar"
              />
              <div class="maskingInfo">
                <h4>{{vehiculo.Nombre}}</h4>
                <p>{{vehiculo.Familia + ' ' + ( vehiculo.Familia == 'Mercedes' ? 'Vito' : 'Transporter' )}}</p>
                <a
                  v-if="vehiculo.Disponible"
                  :href="'furgoneta/' + vehiculo.VehiculoID"
                  class="btn buttonTransparent"
                >Ver Más</a>
              </div>
            </div>
            <div class="media-body">
              <div class="bodyLeft">
                <h4 class="media-heading">
                  <a :href="'furgoneta/' + vehiculo.VehiculoID">{{vehiculo.Nombre}}</a>
                </h4>
                <!--DESCRIPCIÓN-->
                <p>{{vehiculo.DescripcionCorta}}</p>
                <hr style="margin-top: 6px; margin-bottom: 6px" />
                <!--CARACTERÍSTICAS TÉCNICAS-->
                <div class="row">
                  <div class="col-md-6">
                    <span class>
                      <!-- <img
                        src="../img/icons/van.png"
                        width="21"
                        height="21"
                        style="margin-right: 7px"
                      /> -->
                      Marca: {{vehiculo.Familia}}
                    </span>
                  </div>
                  <div class="col-md-6">
                    <span class>
                      <!-- <img
                        src="../img/icons/modelo.png"
                        width="21"
                        height="21"
                        style="margin-right: 7px; margin-left: -2px"
                      /> -->
                      Modelo: {{ vehiculo.Familia == 'Mercedes' ? 'Vito' : 'Transporter' }}
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
                      /> -->
                      Motor: {{vehiculo.FichaTecnica.Motor}}
                    </span>
                  </div>
                  <div class="col-md-6">
                    <span class>
                      <!-- <img
                        src="../img/icons/combustible.png"
                        width="19"
                        height="19"
                        style="margin-right: 7px"
                      /> -->
                      Combustible: {{vehiculo.FichaTecnica.Combustible}}
                    </span>
                  </div>
                </div>
                <div class="row top-row2">
                  <div class="col-md-6">
                    <span class>
                      <!-- <img
                        src="../img/icons/asientos.png"
                        width="19"
                        height="19"
                        style="margin-right: 7px"
                      /> -->
                      Plazas de viaje: {{vehiculo.FichaTecnica.NumeroAsientos}}
                    </span>
                  </div>
                  <div class="col-md-6">
                    <span class>
                      <!-- <img
                        src="../img/icons/plazas_dormir.png"
                        width="21"
                        height="21"
                        style="margin-right: 7px"
                      /> -->
                      Plazas para dormir: {{vehiculo.FichaTecnica.PlazasDormir}}+1
                    </span>
                  </div>
                </div>
                <hr style="margin-top: 6px; margin-bottom: 6px" />

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
                </div> -->
              </div>
              <div class="bodyRight">
                <div class="bookingDetails" style="padding: ">
                  <p style="margin-bottom: 20px">Desde</p>
                  <h2
                    style="margin-bottom: 40px; font-size: 40px"
                  >{{vehiculo.precioTemporadaBaja}}&#8364</h2>
                  <a
                    v-if="vehiculo.Disponible"
                    :href="'furgoneta/' + vehiculo.VehiculoID"
                    class="btn btn-block buttonTransparent top-row8"
                  >Ver</a>
                  <!--<span ng-if="!vehiculo.Disponible" class="top-row8">Próximamente</span>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
    }
  }
};
</script>
<style>
/* .mobile-caption {
  position: absolute;
  top: 12%;
  font-size: 25px; 
  color: white; 
  font-weight: bold;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
} */
</style>

