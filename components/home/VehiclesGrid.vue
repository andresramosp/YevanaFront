<template>
<div>

  <div v-if="staticData" class="row isotopeContainer">
    <div class="col-sm-4 isotopeSelector alquila">
      <article>
        <figure>
          <img
            class="lazyload"
            data-src="/img/vehiculos/YEVANA_RD.jpg"
            alt="Furgoneta Camper Mercedez Benz Marco Polo Vito 110 CDI camperizada por Yevana para alquiler o venta en Madrid"
            style="max-height: 240px"
            @click="goToVehicle( { VehiculoID: 'RD', Disponible: true} )"
          />
          <div v-if="$device.isMobile" style="text-align: center">
            <a href="/furgoneta-camper/RD" class="mobile-caption">
              Red Devil
            </a>
          </div>
          <div v-else class="overlay">
            <a href="/furgoneta-camper/RD" class="fancybox-pop"
              ><div class="overlayInfo" style="margin-top: 20px">
                <h5>
                  <span style="font-size: 25px; color: white; font-weight: bold"
                    >Red Devil</span
                  >
                  <br />
                  <br />Desde <span>70€</span> <br />
                  <br />
                  <span>Ver detalles</span>
                </h5>
                <h5 style="display: none"><span>Próximamente!</span></h5>
              </div></a
            >
          </div>
        </figure>
      </article>
    </div>
    <div class="col-sm-4 isotopeSelector alquila">
      <article>
        <figure>
          <img
            class="lazyload"
            data-src="/img/vehiculos/YEVANA_EM.jpg"
            alt="Furgoneta Camper Mercedez Benz Marco Polo Vito 116 CDI camperizada por Yevana para alquiler o venta en Madrid"
            style="max-height: 240px"
            @click="goToVehicle( { VehiculoID: 'EM', Disponible: true} )"
          />
          <div v-if="$device.isMobile" style="text-align: center">
            <a href="/furgoneta-camper/EM" class="mobile-caption"> Emerald </a>
          </div>
          <div v-else class="overlay">
            <a href="/furgoneta-camper/EM" class="fancybox-pop"
              ><div class="overlayInfo" style="margin-top: 20px">
                <h5>
                  <span style="font-size: 25px; color: white; font-weight: bold"
                    >Emerald</span
                  >
                  <br />
                  <br />Desde <span>70€</span> <br />
                  <br />
                  <span>Ver detalles</span>
                </h5>
                <h5 style="display: none"><span>Próximamente!</span></h5>
              </div></a
            >
          </div>
        </figure>
      </article>
    </div>
    <div class="col-sm-4 isotopeSelector alquila">
      <article>
        <figure>
          <img
            class="lazyload"
            data-src="/img/vehiculos/YEVANA_BL.jpg"
            alt="Furgoneta Camper Volkswagen California Ocean T5 L2H2 camperizada por Yevana para alquiler o venta en Madrid"
            style="max-height: 240px"
            @click="goToVehicle( { VehiculoID: 'BL', Disponible: true} )"
          />
          <div v-if="$device.isMobile" style="text-align: center">
            <a href="/furgoneta-camper/BL" class="mobile-caption">
              Black Label
            </a>
          </div>
          <div v-else class="overlay">
            <a href="/furgoneta-camper/BL" class="fancybox-pop"
              ><div class="overlayInfo" style="margin-top: 20px">
                <h5>
                  <span style="font-size: 25px; color: white; font-weight: bold"
                    >Black Label</span
                  >
                  <br />
                  <br />Desde <span>80€</span> <br />
                  <br />
                  <span>Ver detalles</span>
                </h5>
                <h5 style="display: none"><span>Próximamente!</span></h5>
              </div></a
            >
          </div>
        </figure>
      </article>
    </div>
    <div class="col-sm-4 isotopeSelector alquila">
      <article>
        <figure>
          <img
            class="lazyload"
            data-src="/img/vehiculos/YEVANA_BW.jpg"
            alt="Furgoneta Camper Volkswagen California Ocean T5 L2H2 camperizada por Yevana para alquiler o venta en Madrid"
            style="max-height: 240px"
          />
          <div v-if="$device.isMobile" style="text-align: center">
            <a href="/furgoneta-camper/BW" class="mobile-caption">
              Black &amp; White
            </a>
          </div>
          <div v-else class="overlay"></div>
        </figure>
      </article>
    </div>
    <div class="col-sm-4 isotopeSelector alquila">
      <article>
        <figure>
          <img
            class="lazyload"
            data-src="/img/vehiculos/YEVANA_NE.jpg"
            alt="Furgoneta Camper Volkswagen California Ocean T5 L2H2 camperizada por Yevana para alquiler o venta en Madrid"
            style="max-height: 240px"
          />
          <div v-if="$device.isMobile" style="text-align: center">
            <a href="/furgoneta-camper/NE" class="mobile-caption"> Neptune </a>
          </div>
          <div v-else class="overlay"></div>
        </figure>
      </article>
    </div>
    <div class="col-sm-4 isotopeSelector alquila">
      <article>
        <figure>
          <img
            class="lazyload"
            data-src="/img/vehiculos/YEVANA_NG.jpg"
            alt="Furgoneta Camper Volkswagen California Ocean T5 L2H2 camperizada por Yevana para alquiler o venta en Madrid"
            style="max-height: 240px"
          />
          <div v-if="$device.isMobile" style="text-align: center">
            <a href="/furgoneta-camper/NG" class="mobile-caption">
              New Glory
            </a>
          </div>
          <div v-else class="overlay"></div>
        </figure>
      </article>
    </div>
  </div>
  <!-- DINAMICA -->
  <div v-else class="row isotopeContainer">
    <div
      v-for="vehicle in vehicles"
      :key="vehicles.indexOf(vehicle)"
      class="col-sm-4 isotopeSelector alquila"
    >
      <article>
        <figure>
          <img
            :src="'/img/vehiculos/YEVANA_' + vehicle.VehiculoID + '.jpg'"
            :alt="`Furgoneta Camper ${getModeloName(
              vehicle
            )} camperizada por Yevana para alquiler o venta en Madrid`"
            style="max-height: 240px"
            @click="goToVehicle(vehicle)"
          />
          <div
            v-show="$device.isMobile && vehicle.Disponible"
            style="text-align: center"
          >
            <nuxt-link
              :to="'/furgoneta-camper/' + vehicle.VehiculoID"
              class="mobile-caption"
            >
              {{ vehicle.Nombre }}
            </nuxt-link>
          </div>
          <div
            v-show="!$device.isMobile || !vehicle.Disponible"
            class="overlay"
          >
            <nuxt-link
              v-if="vehicle.Disponible"
              :to="'/furgoneta-camper/' + vehicle.VehiculoID"
              class="fancybox-pop"
            >
              <div class="overlayInfo" style="margin-top: 20px">
                <h5 v-show="vehicle.Disponible">
                  <span
                    style="font-size: 25px; color: white; font-weight: bold"
                    >{{ vehicle.Nombre }}</span
                  >
                  <br />
                  <br />Desde
                  <span
                    >{{
                      vehicle.PreciosActuales.find(
                        (pr) => pr.Temporada === "Baja"
                      ).Precio
                    }}€</span
                  >
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

</template>
<script>
import VehicleService from "~/services/vehicleService";
export default {
  data() {
    return {
      vehicles: [],
    };
  },
  props: ['staticData'],
  created() {
    if (!this.staticData)
      this.getVehicles();
  },
  methods: {
    async getVehicles() {
      this.vehicles = await VehicleService.getAll();
    },
    goToVehicle(vehicle) {
      if (vehicle.Disponible)
        this.$router.push({
          path: `/furgoneta-camper/${vehicle.VehiculoID}`,
        });
    },
    getModeloName(vehiculo) {
      return vehiculo.FichaTecnica.MarcaModelo.replace(
        "MB",
        "Mercedez Benz Marco Polo"
      ).replace("VW", "Volkswagen California Ocean");
    },
  },
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

