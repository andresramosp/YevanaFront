<template>
  <div :class="`${$device.isMobile ? 'mobile-fixed-panel' : ''}`">
    <div class="singleHotelSidebar">
      <div :class="`${!$device.isMobile ? 'panel panel-default' : ''}`">
        <div v-if="!$device.isMobile" class="panel-heading">DESDE {{50}} €/DÍA</div>
        <div
          class="close-panel"
          v-else
          @click="$emit('onClose')"
        ><i class="fa fa-arrow-left icon-volver"></i>Volver a la ficha</div>
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
                      v-model="reservaRequestModel.desde"
                      :input-props="{ placeholder: 'DD/MM/YYYY', readonly: true }"
                      @input="getPreview"
                      style="display: inline-block;"
                      :popover="{ placement: 'bottom-start', positionFixed: true }"
                      :first-day-of-week="2"
                      class="date-picker"
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
                    >
                    </vSelect>
                  </div>
                </div>

                <div class="form-group">
                  <label class="control-label col-xs-2" for="inputSuccess3">Hasta:</label>
                  <div class="col-xs-6 datepickerWrap" style="padding-right: 0px">
                    <v-date-picker
                      height="40"
                      v-model="reservaRequestModel.hasta"
                      :input-props="{ placeholder: 'DD/MM/YYYY', readonly: true }"
                      @input="getPreview"
                      style="display: inline-block;"
                      :popover="{ placement: 'bottom-start', positionFixed: true }"
                      :first-day-of-week="2"
                      class="date-picker"
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
                    >
                    </vSelect>
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
                        :reduce="extra => { return { ExtraID: extra.ExtraID } }"
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
                        :reduce="extra => { return { ExtraID: extra.ExtraID } }"
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
                        :reduce="extra => { return { ExtraID: extra.ExtraID } }"
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
                    :reduce="extra => { return { ExtraID: extra.ExtraID } }"
                    :options="extras"
                    v-model="reservaRequestModel.extras"
                    @input="getPreview"
                  >
                    <template
                      v-slot:option="option"
                    >{{ option.Nombre + ' (' + option.Precio + '€ ' + (option.Calculo == 'Diario' ? '/ día)' : ')')}}</template>
                  </vSelect>
                </div>

                <!-- Kilometraje -->
                <div class="form-group">
                  <div layout="row" layout-align="space-between center">
                    <div class="col-sm-12 col-md-12 col-xs-12" style="text-align: right; margin-top: 20px">
                      <label class="control-label" for="kilometrajeCheckbox">Kilometraje ilimitado</label>
                      <input 
                        @change="getPreview"
                        v-model="reservaRequestModel.kmIli" 
                        id="kilometrajeCheckbox" 
                        type="checkbox" />
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
import StringService from "~/services/stringService";
export default {
  data() {
    return {
      extras: [],
      recogidaOptions: [],
      devolucionOptions: [],
      seguroOptions: [],
      kilometrajeOptions: [],
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
      desglosePreview: { Precio: 0 }
    };
  },
  props: ["vehicleId"],
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
      this.kilometrajeOptions = allExtras.filter(ex => ex.GroupID == "Kilometraje");
      this.reservaRequestModel.seguro = {
        ExtraID: this.seguroOptions.find(opt => opt.DefaultEnGrupo).ExtraID
      };
      this.reservaRequestModel.recogida = {
        ExtraID: this.recogidaOptions.find(opt => opt.DefaultEnGrupo).ExtraID
      };
      this.reservaRequestModel.devolucion = {
        ExtraID: this.devolucionOptions.find(opt => opt.DefaultEnGrupo).ExtraID
      };
    },
    // onDateDesdeChange(event) {
    //   this.filter.range.start = event.start
    //   this.filter.range.end = event.end
    //   this.getActivity()
    // },
    async getPreview() {
      if (this.reservaRequestModel.desde && this.reservaRequestModel.hasta) {
        const reservaRequest = {
          Vehiculo: { VehiculoID: this.vehicleId },
          Desde: StringService.getLocalDate(this.reservaRequestModel.desde),
          Hasta: StringService.getLocalDate(this.reservaRequestModel.hasta), // "2020-03-10T00:00:00.000Z",
          Extras: this.getSelectedExtras()
        };
        this.desglosePreview = await ReservaService.getDesglosePreview(
          reservaRequest
        );
      } else {
        // Alerta: mensaje abajo gris estático para movil y modal para web
      }
    },
    getSelectedExtras() {
      let kmBasico = this.kilometrajeOptions.find(opt => opt.Nombre == 'Básico');
      let kmIlimitado = this.kilometrajeOptions.find(opt => opt.Nombre == 'Ilimitado');
      return [
        ...this.reservaRequestModel.extras,
        this.reservaRequestModel.recogida,
        this.reservaRequestModel.devolucion,
        this.reservaRequestModel.seguro,
        this.reservaRequestModel.kmIli ? { ExtraID: kmIlimitado.ExtraID } :  { ExtraID: kmBasico.ExtraID }
      ];
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
  padding-top: 50px;
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
.close-panel {
  float: right;
  font-size: 17px;
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
  width: 18px
}
</style>
