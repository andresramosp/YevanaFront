<template>
  <div class="panel-group hotelDescription" id="accordionIcons">
    <!-- CARACTERISTICAS -->
    <div class="panel panel-default">
      <a
        accordionheader
        class="panel-heading accordion-toggle"
        data-toggle="collapse"
        data-parent="#accordionIcons"
        href="#collapseOne"
        target="_self"
      >
        <span>CARACTERÍSTICAS</span>
        <i class="indicator fa fa-minus pull-right"></i>
      </a>
      <div accordionbody id="collapseOne" class="panel-collapse collapse in">
        <div class="panel-body">
          <div class="row">
            <div class="col-xs-12 col-sm-6">
              <ul class="descriptionList">
                <li>
                  <img
                    :src="require('~/assets/icons/consumo.png')"
                    width="19"
                    height="19"
                    style="margin-right: 7px"
                  />
                  Marca y modelo: {{'Mercedes'}}
                </li>
                <li>
                  <img
                    :src="require('~/assets/icons/consumo.png')"
                    width="19"
                    height="19"
                    style="margin-right: 7px"
                  />
                  Motor: {{'12cc'}}
                </li>
                <li>
                  <img
                    :src="require('~/assets/icons/consumo.png')"
                    width="19"
                    height="19"
                    style="margin-right: 7px"
                  />
                  Combustible: {{'12L'}}
                </li>
                <li>
                  <img
                    :src="require('~/assets/icons/consumo.png')"
                    width="19"
                    height="19"
                    style="margin-right: 7px"
                  />
                  Consumo: {{'50L/H'}}
                </li>
                <li>
                  <img
                    :src="require('~/assets/icons/consumo.png')"
                    width="19"
                    height="19"
                    style="margin-right: 7px"
                  />
                  Dimensiones: {{'6 X 8 M'}}
                </li>
              </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
              <ul class="descriptionList">
                <li>
                  <img
                    :src="require('~/assets/icons/consumo.png')"
                    width="19"
                    height="19"
                    style="margin-right: 7px"
                  />
                  Asientos: {{2}}
                </li>
                <li>
                  <img
                    :src="require('~/assets/icons/consumo.png')"
                    width="19"
                    height="19"
                    style="margin-right: 7px"
                  />
                  Climatización: {{'SI'}}
                </li>
                <!-- <li>
                  <img
                    ng-src="{{'img/icons/combustible.png'}}"
                    width="19"
                    height="19"
                    style="margin-right: 7px"
                  />
                  Capacidad Depósito: {{vehicle.FichaTecnica.CapacidadCombustible + ' L'}}
                </li>
                <li>
                  <img
                    ng-src="{{'img/icons/combustible.png'}}"
                    width="19"
                    height="19"
                    style="margin-right: 7px"
                  />
                  Radio: {{vehicle.FichaTecnica.Radio}}
                </li>
                <li ng-if="vehicle.FichaTecnica.EquipamientoAdicional">
                  <img
                    ng-src="{{'img/icons/combustible.png'}}"
                    width="19"
                    height="19"
                    style="margin-right: 7px"
                  />
                  Otros: {{vehicle.FichaTecnica.EquipamientoAdicional}}
                </li>-->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- EQUIPAMIENTO -->
    <div class="panel panel-default">
      <a
        class="panel-heading accordion-toggle"
        data-toggle="collapse"
        data-parent="#accordionIcons"
        href="#collapseTwo"
        target="_self"
      >
        <span>EQUIPAMIENTOS</span>
        <i class="indicator fa fa-minus pull-right"></i>
      </a>
      <div id="collapseTwo" class="panel-collapse collapse in">
        <div class="panel-body">
          <ul>
            <li v-for="categoria in categoriasEquipamiento" :key="categoria">
              <div class="row">
                <div class="col-md-3 col-sm-3 col-xs-3">{{categoria}}</div>
                <div class="col-md-9 col-sm-9 col-xs-9">
                  <div class="row">
                    <div
                      v-for="equip in vehicle.FichaTecnica.EquipamientoItems"
                      :key="equip.Nombre"
                    >
                      <div
                        v-if="equip.Categoria == categoria"
                        class="col-md-6"
                        style="margin-bottom:10px"
                      >
                        <!--<img ng-if="imageExists(extra.Nombre)" ng-src="{{'img/icons/' + utilidadesService.cleanString(extra.Nombre) + '.png'}}" width="19" height="19" style="margin-right: 7px" />
                        <img ng-if="!imageExists(extra.Nombre)" ng-src="{{'img/icons/generic_item.png'}}" width="19" height="19" style="margin-right: 7px" />-->
                        {{equip.Nombre}}
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!--EXTRAS-->

    <div class="panel panel-default">
      <a
        class="panel-heading accordion-toggle"
        data-toggle="collapse"
        data-parent="#accordionIcons"
        href="#collapseExtras"
        target="_self"
      >
        <span>EXTRAS</span>
        <i class="indicator fa fa-minus pull-right"></i>
      </a>
      <div id="collapseExtras" class="panel-collapse collapse in">
        <div class="panel-body">
          <div class="col-sm-12 col-xs-12 accordionsTransparent">
            <div class="accordionSolidTitle">
              <div class="panel-group" id="accordionExtras">
                <div v-for="item in extras" :key="item.ExtraID" class="panel panel-default">
                  <a
                    class="panel-heading accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordionExtras"
                    :href="'#collapseExtra' + item.ExtraID"
                    target="_self"
                  >
                    <span>{{item.Nombre}}</span>
                    <i class="indicator fa fa-plus-square pull-right"></i>
                    <span class="pull-right" style="margin-right: 20px">
                      {{item.Precio}} € {{item.Calculo == 'Diario' ? '/ día' : 'por alquiler'}}
                      {{item.PrecioMaximo ? ('- Máximo: ' + item.PrecioMaximo) : ''}}
                    </span>
                  </a>
                  <div :id="'collapseExtra' + item.ExtraID" class="panel-collapse collapse">
                    <div class="panel-body">
                      <div class="media">
                        <div class="media-body">
                          <p>{{item.Descripcion}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoriasEquipamiento: [],
    };
  },
  props: ["vehicle", "extras"],
  mounted() {

    const categorias = this.vehicle.FichaTecnica.EquipamientoItems.map(eq => eq.Categoria );
    this.categoriasEquipamiento = Array.from(new Set(categorias));
  },
  methods: {
  }
};
</script>

<style scoped>
.mobile .singlePackage .panel-group .panel-heading {
  font-size: 12px !important;
}
#collapseExtras .panel-body {
  padding-left: 0px;
  padding-right: 0px;
}
</style>