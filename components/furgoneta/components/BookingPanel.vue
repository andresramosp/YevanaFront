<template>
  <div :class="`${$device.isMobile ? 'mobile-fixed-panel' : ''}`">
    <div class="singleHotelSidebar">
      <div :class="`${!$device.isMobile ? 'panel panel-default' : ''}`">
        <div v-if="!$device.isMobile" class="panel-heading">DESDE {{precioTemporadaBaja}} €/DÍA</div>
        <div class="close-panel" v-else @click="$emit('onClose')">
          <i class="fa fa-arrow-left icon-volver"></i>Volver a la ficha
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-xs-12">
              <form class="form-horizontal">
                <!--Leyendas Temporadas-->
                <div class="form-group">
                  <!-- <div class="col-sm-12" style="text-align: center; margin-top: 10px">
                    <img
                      src=""
                      :title="precioTemporadaBaja"
                      style="width: 10px; height: 10px; border: 1px, solid; border-radius: 2px; background-color: cornflowerblue"
                    />
                    <span style="font-size: 11px; margin-left: 3px">Baja - {{precioTemporadaBaja}}€</span>
                    <img
                      :title="precioTemporadaMedia"
                      style="width: 10px; height: 10px; border: 1px, solid; border-radius: 2px; background-color: lightgreen; margin-left: 10px"
                    />
                    <span
                      style="font-size: 11px; margin-left: 3px"
                    >Media - {{precioTemporadaMedia}}€</span>
                    <img
                      :title="precioTemporadaAlta"
                      style="width: 10px; height: 10px; border: 1px, solid; border-radius: 2px; background-color: lightpink; margin-left: 10px"
                    />
                    <span style="font-size: 11px; margin-left: 3px">Alta - {{precioTemporadaAlta}}€</span>
                  </div>-->
                </div>
                <!--Calendarios-->
                <div class="form-group">
                  <label class="control-label col-xs-2" for="inputSuccess3">Desde:</label>
                  <div class="col-xs-6 datepickerWrap" style="padding-right: 0px">
                    <v-date-picker
                      v-model="reservaRequestModel.desde"
                      :input-props="{ placeholder: 'DD/MM/YYYY', readonly: true }"
                      @input="onInputDate"
                      :min-date="new Date()"
                      style="display: inline-block;"
                      :popover="{ placement: 'bottom-start', positionFixed: true }"
                      :first-day-of-week="2"
                      class="date-picker"
                      :attributes="calendarAttrs"
                    />
                  </div>
                  <div class="col-xs-4">
                    <vSelect
                      v-model="reservaRequestModel.horaDesde"
                      :clearable="false"
                      :searchable="false"
                      placeholder
                      :reduce="opt => parseInt(opt.replace(':00', ''))"
                      :options="['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']"
                    ></vSelect>
                  </div>
                </div>

                <div class="form-group">
                  <label class="control-label col-xs-2" for="inputSuccess3">Hasta:</label>
                  <div class="col-xs-6 datepickerWrap" style="padding-right: 0px">
                    <v-date-picker
                      height="40"
                      v-model="reservaRequestModel.hasta"
                      :input-props="{ placeholder: 'DD/MM/YYYY', readonly: true }"
                      @input="onInputDate"
                      :min-date="hastaMinDate"
                      style="display: inline-block;"
                      :popover="{ placement: 'bottom-start', positionFixed: true }"
                      :first-day-of-week="2"
                      class="date-picker"
                      :attributes="calendarAttrs"
                    />
                  </div>
                  <div class="col-xs-4">
                    <vSelect
                      v-model="reservaRequestModel.horaHasta"
                      :clearable="false"
                      :searchable="false"
                      placeholder
                      :reduce="opt => parseInt(opt.replace(':00', ''))"
                      :options="['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']"
                    ></vSelect>
                  </div>
                </div>

                <!--Forma recogida-->
                <div class="form-group">
                  <div layout="row" layout-align="space-between center">
                    <label class="control-label col-xs-3" for="inputSuccess3">Recogida:</label>
                    <div class="col-xs-9">
                      <vSelect
                        v-model="reservaRequestModel.recogida"
                        @input="getPreview"
                        :clearable="false"
                        :searchable="false"
                        placeholder
                        label="Nombre"
                        :options="recogidaOptions"
                      ></vSelect>
                    </div>
                  </div>
                </div>

                <!--Forma devolución-->
                <div class="form-group">
                  <div layout="row" layout-align="space-between center">
                    <label class="control-label col-xs-3" for="inputSuccess3">Devolución:</label>
                    <div class="col-xs-9">
                      <vSelect
                        v-model="reservaRequestModel.devolucion"
                        @input="getPreview"
                        :clearable="false"
                        :searchable="false"
                        placeholder
                        label="Nombre"
                        :options="devolucionOptions"
                      ></vSelect>
                    </div>
                  </div>
                </div>

                <!--Seguro-->
                <div class="form-group">
                  <div layout="row" layout-align="space-between center">
                    <label class="control-label col-xs-3" for="inputSuccess3">Seguro:</label>
                    <div class="col-xs-9">
                      <vSelect
                        v-model="reservaRequestModel.seguro"
                        @input="getPreview"
                        :clearable="false"
                        :searchable="false"
                        placeholder
                        label="Nombre"
                        :options="seguroOptions"
                      ></vSelect>
                    </div>
                  </div>
                </div>

                <!--Lista de Extras-->
                <div class="extras-box">
                  <vSelect
                    :searchable="false"
                    multiple
                    placeholder="Selecciona tus extras"
                    label="Nombre"
                    :options="extras"
                    v-model="reservaRequestModel.extras"
                    @input="getPreview"
                  >
                    <template v-slot:option="option">
                      <img
                        :src="require('~/assets/icons/' + StringService.snakeize(option.Nombre.toLowerCase()) +'.png')"
                        :width="19"
                        :height="19"
                        style="margin-right: 5px"
                      />
                      {{ option.Nombre + ' (' + option.Precio + '€ ' + (option.Calculo == 'Diario' ? '/ día)' : ')')}}
                    </template>
                  </vSelect>
                </div>

                <!-- Kilometraje -->
                <div class="form-group">
                  <div layout="row" layout-align="space-between center">
                    <div
                      class="col-sm-12 col-md-12 col-xs-12"
                      style="text-align: right; margin-top: 20px"
                    >
                      <label class="control-label" for="kilometrajeCheckbox">Kilometraje ilimitado</label>
                      <input
                        @change="onInputKm"
                        v-model="reservaRequestModel.kmIli"
                        :checked="reservaRequestModel.kmIli"
                        id="kilometrajeCheckbox"
                        type="checkbox"
                      />
                    </div>
                  </div>
                </div>

                <!--Precio-->
                <div class="col-sm-12">
                  <div class="totalCost">
                    <div class="col-xs-6 totalCostLeft">
                      <p>TOTAL</p>
                    </div>
                    <div class="col-xs-6 totalCostRight">{{desglosePreview.Precio}} &#8364;</div>
                    <div
                      class="col-xs-12"
                      style="text-align:right; font-size: 12px; font-style: italic; color: #ff891e"
                    >
                      <span>{{''}}</span>
                    </div>
                  </div>
                </div>

                <div class="col-sm-12 infoKm">{{this.infoKilometraje}}</div>

                <div v-if="!$device.isMobile" @click="startBooking()" class="col-sm-12">
                  <a :disabled="false" class="btn btn-block buttonTransparent">
                    Solicitar Reserva
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </div>
                <div
                  v-else-if="desglosePreview.Precio"
                  @click="startBooking()"
                  class="mobile-booking-button"
                >Reservar</div>

                <div v-if="!$device.isMobile" class="col-sm-12">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/terminos-condiciones.html"
                  >Términos y condiciones del alquiler</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import ReservaService from "~/services/reservaService";
import TemporadasService from "~/services/temporadasService";
import StringService from "~/services/stringService";
import State from "~/services/state";
export default {
  data() {
    return {
      StringService,
      reservaRequestModel: {
        desde: null,
        hasta: null,
        horaDesde: 10,
        horaHasta: 10,
        extras: [],
        devolucion: null,
        recogida: null,
        seguro: null,
        kmIli: false
      },
      temporadas: [],
      calendarAttrs: [],
      desglosePreview: { Precio: 0 },
      infoKilometraje: ""
    };
  },
  props: ["vehicle", "allExtras"],
  components: {
    vSelect
  },
  computed: {
    hastaMinDate() {
      let minDate = this.reservaRequestModel.desde
        ? new Date(this.reservaRequestModel.desde)
        : new Date();
      minDate.setDate(minDate.getDate() + 2);
      return minDate;
    },
    extras() {
      return this.allExtras.filter(ex => !ex.GroupID);
    },
    recogidaOptions() {
      return this.allExtras.filter(ex => ex.GroupID == "Recogida");
    },
    devolucionOptions() {
      return this.allExtras.filter(ex => ex.GroupID == "Devolucion");
    },
    seguroOptions() {
      return this.allExtras.filter(ex => ex.GroupID == "Seguro");
    },
    kilometrajeOptions() {
      return this.allExtras.filter(ex => ex.GroupID == "Kilometraje");
    },
    precioTemporadaBaja() {
      return this.vehicle.PreciosActuales.find(pr => pr.Temporada == "Baja")
        .Precio;
    },
    precioTemporadaAlta() {
      return this.vehicle.PreciosActuales.find(pr => pr.Temporada == "Alta")
        .Precio;
    },
    precioTemporadaMedia() {
      return this.vehicle.PreciosActuales.find(pr => pr.Temporada == "Media")
        .Precio;
    }
  },
  mounted() {
    this.getAndfillTemporadas();
    this.reservaRequestModel.seguro = this.seguroOptions.find(opt => opt.DefaultEnGrupo);
    this.reservaRequestModel.recogida = this.recogidaOptions.find(opt => opt.DefaultEnGrupo);
    this.reservaRequestModel.devolucion = this.devolucionOptions.find(opt => opt.DefaultEnGrupo);
  },
  methods: {
    async getAndfillTemporadas() {
      this.temporadas = await TemporadasService.getAll();
      this.calendarAttrs = [
        {
          highlight: {
            color: "green",
            fillMode: "light"
          },
          popover: {},
          dates: await TemporadasService.getDatesTemporada("Media"),
          excludeDates: null,
          order: 0
        },
        {
          highlight: {
            color: "blue",
            fillMode: "light"
          },
          popover: {},
          dates: await TemporadasService.getDatesTemporada("Baja"),
          excludeDates: null,
          order: 0
        },
        {
          highlight: {
            color: "pink",
            fillMode: "light"
          },
          popover: {},
          dates: await TemporadasService.getDatesTemporada("Alta"),
          excludeDates: null,
          order: 0
        }
      ];
    },
    onInputDate() {
      this.showInfoKmPorDias();
      this.getPreview();
    },
    onInputKm() {
      this.showInfoKm();
      this.getPreview();
    },
    startBooking() {
      const reservaReq = this.getReservaRequest();
      if (reservaReq) {
        State.set(
          "reserva",
          { ...reservaReq, Vehiculo: this.vehicle, Desglose: this.desglosePreview },
          true
        );
        this.$router.push({
          path: `/formulario/`
        });
      }
      else {
        Vue.$toast.open({
          message: "Debe seleccionar fecha de inicio y de fin",
          position: "bottom",
          type: "error",
          dismissible: true,
          duration: 5000
        });
      }
    },
    async getPreview() {
      const reservaRequest = this.getReservaRequest();
      if (reservaRequest) {
        this.desglosePreview = await ReservaService.getDesglosePreview(
          reservaRequest
        );
      }
    },
    getReservaRequest() {
      if (this.reservaRequestModel.desde && this.reservaRequestModel.hasta) {
        return {
          Vehiculo: { VehiculoID: this.vehicle.VehiculoID },
          Desde: StringService.getLocalDate(this.reservaRequestModel.desde),
          Hasta: StringService.getLocalDate(this.reservaRequestModel.hasta),
          HoraDesde: this.reservaRequestModel.horaDesde,
          HoraHasta: this.reservaRequestModel.horaHasta,
          Extras: this.getSelectedExtras()
        };
      } else {
        return null;
      }
    },
    getSelectedExtras() {
      let kmBasico = this.kilometrajeOptions.find(
        opt => opt.Nombre == "Básico"
      );
      let kmIlimitado = this.kilometrajeOptions.find(
        opt => opt.Nombre == "Ilimitado"
      );
      return [
        ...this.reservaRequestModel.extras,
        this.reservaRequestModel.recogida,
        this.reservaRequestModel.devolucion,
        this.reservaRequestModel.seguro,
        this.reservaRequestModel.kmIli
          ? kmIlimitado
          : kmBasico
      ];
    },
    showInfoKmPorDias() {
      if (this.reservaRequestModel.desde && this.reservaRequestModel.hasta) {
        const numDias = TemporadasService.getDatesInRange(
          this.reservaRequestModel.desde,
          this.reservaRequestModel.hasta
        ).length;
        if (!this.reservaRequestModel.kmIli) {
          this.infoKilometraje =
            "Dispones de " + 200 * numDias + " Kilómetros para tu viaje";
        }
      }
    },
    showInfoKm() {
      if (this.reservaRequestModel.kmIli) {
        this.infoKilometraje = "Disfruta de infinitos kilómetros!";
      } else {
        this.infoKilometraje = "";
        this.showInfoKmPorDias();
      }
    }
  }
};
</script>
<style scoped>
.singleHotelSidebar .control-label {
  font-size: 13px;
  color: gray;
  font-weight: bold;
}
.mobile-fixed-panel .panel-body {
  /* margin: 16px; */
  background-color: #f5f5f5;
  height: 100vh;
  padding: 25px;
  padding-top: 10px;
}
.mobile-fixed-panel .v-select {
  background-color: white;
}
.mobile-fixed-panel {
  margin-top: 0px;
  z-index: 10;
  animation-name: panelFromUp;
  animation-duration: 0.35s;
}
.mobile-fixed-panel .form-group {
  margin-bottom: 20px;
}
@keyframes panelFromUp {
  0% {
    margin-top: -400px;
    /* top: 72px; */
  }
  100% {
    margin-top: 0px;

    /* top: 72px; */
  }
}
@keyframes buttomFromBottom {
  0% {
    margin-bottom: -200px;
    /* top: 72px; */
  }
  100% {
    margin-bottom: 0px;

    /* top: 72px; */
  }
}
.mobile-fixed-panel .totalCost {
  /* margin-top: 30px; */
}
.mobile-booking-button {
  display: flex;
  z-index: 20;
  position: fixed;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5.75rem;
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;
  background: #ff891e;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 2.25rem;
  font-weight: bold;
  animation-name: buttomFromBottom;
  animation-duration: 0.35s;
}
.close-panel {
  float: right;
  font-size: 15px;
  color: #ff891e;
  /* font-weight: bold; */
  margin-top: 10px;
  margin-right: 25px;
}
.icon-volver {
  font-size: 20px;
  vertical-align: middle;
  margin-right: 5px;
}
</style>
<style>
.vs__selected {
  font-size: 12px;
}
.extras-box .vs__selected {
  font-size: 11px;
}
.singleHotelSidebar input {
  height: 25px;
}
.singleHotelSidebar .date-picker input {
  height: 35px;
}
.v-select .vs__dropdown-menu {
  min-width: initial;
}
.vs--single .vs__dropdown-toggle {
  max-height: 35px;
}
.form-group [type="checkbox"] {
  vertical-align: middle;
  margin: 0px;
  width: 18px;
}
.vc-text-base {
  font-size: 12px;
}
.infoKm {
  color: #ff891e;
  font-style: italic;
}
</style>
