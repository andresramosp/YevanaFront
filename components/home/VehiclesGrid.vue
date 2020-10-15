<template>
  <section class="whiteSection">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="sectionTitle" style="margin-bottom: 25px">
            <h2>
              <span>PRUEBA NUESTRAS CAMPERS MÁS EXCLUSIVAS</span>
            </h2>
            <div>Bienvenido a Yevana Camper. Aquí podrás descubrir las mejores furgonetas camperizadas de Madrid. Somos especialistas
              en diseño, fabricación, alquiler y venta de furgonetas camper. Nuestro equipo de ingenieros y artesanos llevan años diseñando
              las mejores experiencias camper para hacer de tu vida un continuo viaje. Somos camperizadores profesionales y disponemos de modelos camper de serie. <nuxt-link to="/modelo/dokker">¡Descúbrelos!</nuxt-link></div>
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
                :alt="`Furgoneta Camper ${getModeloName(vehicle)} camperizada por Yevana para alquiler o venta en Madrid`"
                style="max-height: 240px"
                @click="goToVehicle(vehicle)"
              />
              <div v-show="$device.isMobile && vehicle.Disponible" style="text-align: center">
                <a
                  class="mobile-caption"
                >{{vehicle.Nombre}}</a>
              </div>
              <div v-show="!$device.isMobile || !vehicle.Disponible" class="overlay">
                   <nuxt-link
                      v-if="vehicle.Disponible"
                      :to="'/furgoneta-camper/' + vehicle.VehiculoID"
                      class="fancybox-pop"
                    >
                  <div class="overlayInfo" style="margin-top:20px">
                    <h5 v-show="vehicle.Disponible">
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
                    <h5 v-show="!vehicle.Disponible">
                      <span>Próximamente!</span>
                    </h5>
                  </div>
                </nuxt-link>
              </div>
            </figure>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["vehicles"],
  methods: {
    goToVehicle(vehicle) {
      if (vehicle.Disponible)
      this.$router.push({
        path: `/furgoneta-camper/${vehicle.VehiculoID}`
      })
    },
    getModeloName(vehiculo) {
      return vehiculo.FichaTecnica.MarcaModelo.replace('MB', 'Mercedez Benz Marco Polo').replace('VW', 'Volkswagen California Ocean');
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

