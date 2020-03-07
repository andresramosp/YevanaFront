<template>
  <div :class="`${$device.isMobile ? 'mobile-fixed-panel' : ''}`">
    <div class="singleHotelSidebar">
      <div :class="`${!$device.isMobile ? 'panel panel-default' : ''}`">
        <div v-if="!$device.isMobile" class="panel-heading">DESDE {{50}} €/DÍA</div>
        <div
          style="float: left; font-size: 20px; font-weight: bold; margin-top: 7px; margin-left: 10px;"
          v-else
          @click="$emit('onClose')"
        >X</div>
        <div class="panel-body">
          <div class="row">
            <div class="col-xs-12">
              <form class="form-horizontal">
                <!--Leyendas Temporadas-->
                <!-- <div class="form-group">
                  <div class="col-sm-12" style="text-align: center; margin-top: 10px">
                    <img
                      title="{{precioTemporadaBaja}}"
                      style="width: 10px; height: 10px; border: 1px, solid; border-radius: 2px; background-color: cornflowerblue"
                    />
                    <span style="font-size: 11px; margin-left: 3px">Baja - {{precioTemporadaBaja}}€</span>
                    <img
                      title="{{precioTemporadaMedia}}"
                      style="width: 10px; height: 10px; border: 1px, solid; border-radius: 2px; background-color: lightgreen; margin-left: 10px"
                    />
                    <span
                      style="font-size: 11px; margin-left: 3px"
                    >Media - {{precioTemporadaMedia}}€</span>
                    <img
                      title="{{precioTemporadaAlta}}"
                      style="width: 10px; height: 10px; border: 1px, solid; border-radius: 2px; background-color: lightpink; margin-left: 10px"
                    />
                    <span style="font-size: 11px; margin-left: 3px">Alta - {{precioTemporadaAlta}}€</span>
                  </div>
                </div>-->
                <!--Calendarios-->
                <div class="form-group">
                  <label class="control-label col-xs-2" for="inputSuccess3">Desde:</label>
                  <div class="col-xs-6 datepickerWrap" style="padding-right: 0px">
                    <v-date-picker
                      v-model="reserva.fechaDesde"
                      :input-props="{ placeholder: 'dd/mm/yyyy', readonly: true }"
                      @input="null"
                      style="display: inline-block;"
                      :popover="{ placement: 'bottom-start', positionFixed: true }"
                      :first-day-of-week="2"
                      class="date-picker"
                    />
                  </div>
                  <div class="col-xs-4">
                    <vSelect
                      :clearable="false"
                      :searchable="false"
                      placeholder
                      :options="[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]"
                    >
                      <template v-slot:option="option">{{ option.label + ':00' }}</template>
                    </vSelect>
                  </div>
                </div>

                <div class="form-group">
                  <label class="control-label col-xs-2" for="inputSuccess3">Hasta:</label>
                  <div class="col-xs-6 datepickerWrap" style="padding-right: 0px">
                    <v-date-picker
                      height="40"
                      v-model="reserva.fechaHasta"
                      :input-props="{ placeholder: 'dd/mm/yyyy', readonly: true }"
                      @input="null"
                      style="display: inline-block;"
                      :popover="{ placement: 'bottom-start', positionFixed: true }"
                      :first-day-of-week="2"
                      class="date-picker"
                    />
                  </div>
                  <div class="col-xs-4">
                    <vSelect
                      :clearable="false"
                      :searchable="false"
                      placeholder
                      :options="[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]"
                    >
                      <template v-slot:option="option">{{ option.label + ':00' }}</template>
                    </vSelect>
                  </div>
                </div>

                <!--Forma recogida-->
                <div class="form-group">
                  <div layout="row" layout-align="space-between center">
                    <label class="control-label col-xs-3" for="inputSuccess3">Recogida:</label>
                    <div class="col-xs-9">
                      <vSelect
                        v-model="reserva.recogida"
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
                        v-model="reserva.devolucion"
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
                        v-model="reserva.seguro"
                        @input="selectSeguro"
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
                    :reduce="extra => extra.ExtraID"
                    :options="extras"
                  >
                    <template
                      v-slot:option="option"
                    >{{ option.Nombre + ' (' + option.Precio + '€ ' + (option.Calculo == 'Diario' ? '/ día)' : ')')}}</template>
                  </vSelect>
                </div>

                <!-- Kilometraje -->
                <div class="form-group">
                  <div layout="row" layout-align="space-between center">
                    <div class="col-sm-12 col-md-12 col-xs-12" style="text-align: right">
                      <label class="control-label" for="kilometrajeCheckbox">Kilometraje ilimitado</label>
                      <input class type="checkbox" />
                    </div>
                  </div>
                </div>

                <!--Precio-->
                <div class="col-sm-12">
                  <div class="totalCost">
                    <div class="col-xs-7 totalCostLeft">
                      <p>TOTAL</p>
                    </div>
                    <div class="col-xs-5 totalCostRight">{{desglosePreview.Precio}} &#8364;</div>
                    <div
                      class="col-xs-12"
                      style="text-align:right; font-size: 12px; font-style: italic; color: #ff891e"
                    >
                      <span>{{''}}</span>
                    </div>
                  </div>
                </div>

                <div v-if="!$device.isMobile" class="col-sm-12">
                  <a :disabled="false" class="btn btn-block buttonTransparent">
                    Solicitar Reserva
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </div>
                <div v-else-if="desglosePreview.Precio" class="mobile-booking-button">Reservar</div>

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
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import ExtrasService from "~/services/extrasService";
import ReservaService from "~/services/reservaService";
export default {
  data() {
    return {
      extras: [],
      recogidaOptions: [],
      devolucionOptions: [],
      seguroOptions: [],
      reserva: {
        Vehiculo: { VehiculoID: this.id },
        Desde: null,
        Hasta: null,
        Extras: [],
        precio: 0
      },
      desglosePreview: {}
    };
  },
  props: ['vehicleId'],
  components: {
    vSelect
  },
  mounted() {
    this.getExtras();
  },
  methods: {
    async getExtras() {
      let allExtras = await ExtrasService.getAll();
      this.extras = allExtras.filter(ex => !ex.GroupID);
      this.recogidaOptions = allExtras.filter(ex => ex.GroupID == "Recogida");
      this.devolucionOptions = allExtras.filter(
        ex => ex.GroupID == "Devolucion"
      );
      this.seguroOptions = allExtras.filter(ex => ex.GroupID == "Seguro");
      this.reserva.seguro = this.seguroOptions[0];
      this.reserva.recogida = this.recogidaOptions.find(
        opt => opt.Nombre == "Instalaciones"
      );
      this.reserva.devolucion = this.devolucionOptions.find(
        opt => opt.Nombre == "Instalaciones"
      );
    },
    async selectSeguro() {
      this.reserva = {
        Vehiculo: { VehiculoID: this.vehicleId },
        Desde: "2020-03-08T00:00:00.000Z",
        Hasta: "2020-03-10T00:00:00.000Z",
        Extras: [
          { ExtraID: "KIB" },
          { ExtraID: "SBA" },
          { ExtraID: "DVI" },
          { ExtraID: "RCI" }
        ],
      };
       this.desglosePreview  = await ReservaService.getDesglosePreview(this.reserva);
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
  padding-top: 40px;
}
.mobile-fixed-panel .v-select {
  background-color: white;
}
/* .form-control {
  height: 47px;
  width: 100%;
} */
.mobile-fixed-panel {
  /* position: fixed; */
  /* top: 72px; */
  margin-top: 0px;
  z-index: 10;
  animation-name: panelFromUp;
  animation-duration: 0.35s;
  /* transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 1.94); */
}
/* .mobile-fixed-panel .singleHotelSidebar .totalCost {
  border-bottom: none;
} */
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
  margin-top: 30px;
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
</style>
<style>
.vs__selected {
  font-size: 13px;
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
</style>
