<template>
  <section class="whiteSection">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="sectionTitle" style="margin-bottom: 25px">
            <h2>
              <span>NUESTRA FLOTA</span>
            </h2>
            <div>Todas nuestras Camper cuentan con nuevas experiencias de serie</div>
          </div>
        </div>
      </div>
      <div class="row isotopeContainer">
        <div
          v-for="vehicle in vehicles"
          :key="vehicles.indexOf(vehicle)"
          class="col-sm-4 isotopeSelector alquila"
        >
          <article>
            <figure>
              <img
                :src="'/img/vehiculos/YEVANA_' + vehicle.VehiculoID + '.jpg'"
                alt="Furgoneta Emerald para alquilar"
                style="max-height: 240px"
                @click="goToVehicle(vehicle.VehiculoID)"
              />
              <div v-if="$device.isMobile && vehicle.Disponible" style="text-align: center">
                <a
                  class="mobile-caption"
                >{{vehicle.Nombre}}</a>
              </div>
              <div v-else class="overlay">
                <a
                  class="fancybox-pop"
                  :href="vehicle.Disponible ? ('/furgoneta/' + vehicle.VehiculoID) : 'javascript:void(0)'"
                >
                  <div class="overlayInfo" style="margin-top:20px">
                    <h5 v-if="vehicle.Disponible">
                      <span
                        style="font-size: 25px; color: white; font-weight: bold"
                      >{{vehicle.Nombre}}</span>
                      <br />
                      <br />Desde
                      <span>{{vehicle.PreciosActuales.find(pr => pr.Temporada === 'Baja').Precio}}€</span>
                      <br />
                      <br />
                      <span>Ver detalles</span>
                    </h5>
                    <h5 v-else>
                      <span>Próximamente!</span>
                    </h5>
                  </div>
                </a>
              </div>
            </figure>
          </article>
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
    },
    goToVehicle(id) {
      this.$router.push({
        path: `/furgoneta/${id}`
      })
    }
  }
};
</script>
<style>
.mobile-caption {
  position: absolute;
  top: 12%;
  font-size: 25px; 
  color: white; 
  font-weight: bold;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
</style>

