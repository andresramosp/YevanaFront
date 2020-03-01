<template>
  <div :class="`${$device.isMobile ? 'mobile-fixed-panel' : ''}`">
    <div class="singleHotelSidebar">
      <div :class="`${!$device.isMobile ? 'panel panel-default' : ''}`">
        <div v-if="!$device.isMobile" class="panel-heading">DESDE {{50}} €/DÍA</div>
        <div
          style="float: left; font-size: 20px; font-weight: bold; margin-top: -10px; margin-left: 10px;"
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
                    <div class="input-group date ed-datepicker filterDate">
                      <input
                        :disabled="false"
                        id="desde"
                        type="text"
                        class="form-control"
                        placeholder="DD/MM/YYYY"
                      />
                      <div class="input-group-addon">
                        <span class="fa fa-calendar"></span>
                      </div>
                    </div>
                  </div>
                  <!--<label class="control-label col-md-1 col-sm-12 col-xs-4" for="inputSuccess3">Hora:</label>-->
                  <div class="col-xs-4">
                    <select class="form-control">
                      <option
                        v-for="opt in [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]"
                        :key="opt"
                      >{{ opt + ':00' }}</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label class="control-label col-xs-2" for="inputSuccess3">Hasta:</label>
                  <div class="col-xs-6 datepickerWrap" style="padding-right: 0px">
                    <div class="input-group date ed-datepicker filterDate">
                      <input
                        id="hasta"
                        type="text"
                        :disabled="false"
                        class="form-control"
                        placeholder="DD/MM/YYYY"
                      />
                      <div class="input-group-addon">
                        <span class="fa fa-calendar"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-4">
                    <select class="form-control">
                      <option
                        v-for="opt in [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]"
                        :key="opt"
                      >{{ opt + ':00' }}</option>
                    </select>
                  </div>
                </div>

                <!--Forma recogida-->
               <div class="form-group">
                  <div layout="row" layout-align="space-between center">
                    <div class="col-xs-6">
                      <vSelect
                        placeholder="Recogida"
                        label="Nombre"
                        :options="[{ Nombre: 'Atocha', Precio: 20}, { Nombre: 'Instalaciones', Precio: 30}]"
                      >
                      </vSelect>
                    </div>
                     <div class="col-xs-6">
                      <vSelect
                        placeholder="Devolución"
                        label="Nombre"
                        :options="[{ Nombre: 'Atocha', Precio: 20}, { Nombre: 'Instalaciones', Precio: 30}]"
                      >
                      </vSelect>
                    </div>
                  </div>
                </div>

                <!--Lista de Extras-->
                <vSelect
                  multiple
                  placeholder="Selecciona tus extras"
                  label="Nombre"
                  :reduce="extra => extra.ExtraID"
                  :options="extras"
                >
                  <template v-slot:option="option" style="font-size: 10px; color: red">
                    <span :class="option.icon"></span>
                    {{ option.Nombre + ' (' + option.Precio + '€ ' + (option.Calculo == 'Diario' ? '/ día)' : ')')}}
                  </template>
                </vSelect>

              
                <!--Seguro-->
                <!-- <div class="form-group" style="margin-bottom: 5px">
                  <div layout="row" layout-align="space-between center">
                    <label
                      class="control-label col-md-3 col-sm-12 col-xs-3"
                      for="inputSuccess3"
                    >Seguro:</label>
                    <div class="col-sm-12 col-md-9 col-xs-9">
                      <md-select
                        ng-model="seguro"
                        ng-change="seguroChange()"
                        class="md-no-underline selectBordered"
                      >
                        <md-option
                          ng-value="opt"
                          ng-repeat="opt in seguros"
                        >{{ opt.Nombre + (opt.Nombre != 'Plus' ? ' (' + opt.Precio + ' Eur)' : '' )}}</md-option>
                      </md-select>
                    </div>
                  </div>
                </div>-->

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
                    <div class="col-xs-5 totalCostRight">{{1000}} &#8364;</div>
                    <div
                      class="col-xs-12"
                      style="text-align:right; font-size: 12px; font-style: italic; color: #ff891e"
                    >
                      <span>{{''}}</span>
                    </div>
                  </div>
                </div>

                <div v-if="!$device.isMobile" class="col-sm-12">
                  <a @click="null" :disabled="false" class="btn btn-block buttonTransparent">
                    Solicitar Reserva
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </div>
                <!-- <div v-else class="col-sm-12 mobile-booking-button">
                  <a @click="null" :disabled="false" class="btn btn-block buttonTransparent">
                    Solicitar Reserva
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </div>-->
                <div v-else class="mobile-booking-button">Reservar</div>

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
import ExtrasService from "~/services/extrasService"
export default {
  data() {
    return {
      extras: []
    }
  },
  components: {
    vSelect
  },
  mounted() {
   this.getExtras();
  },
  methods: {
    async getExtras() {
      this.extras = await ExtrasService.getAll();
    }
  }
};
</script>
<style scoped>
.mobile-fixed-panel .panel-body {
  margin: 16px;
  background-color: #f5f5f5;
  height: 580px;
}
.mobile-fixed-panel .v-select {
  background-color: white;
}
.form-control {
  height: 47px;
  width: 100%;
}
.mobile-fixed-panel {
  /* position: fixed; */
  /* top: 72px; */
  margin-top: 0px;
  z-index: 10;
  animation-name: panelFromUp;
  animation-duration: 0.35s;
  /* transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 1.94); */
}
.mobile-fixed-panel .panel-default {
  /* min-height: 610px; */
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
  /* margin-top: 100%;
  transform: translateY(-100px); */
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
