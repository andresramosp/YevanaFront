<template>
  <div class="panel-group hotelDescription" id="accordionIcons">
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
          <!--Características técnicas-->
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
                  Capacidad Depósito: {{vehiculo.FichaTecnica.CapacidadCombustible + ' L'}}
                </li>
                <li>
                  <img
                    ng-src="{{'img/icons/combustible.png'}}"
                    width="19"
                    height="19"
                    style="margin-right: 7px"
                  />
                  Radio: {{vehiculo.FichaTecnica.Radio}}
                </li>
                <li ng-if="vehiculo.FichaTecnica.EquipamientoAdicional">
                  <img
                    ng-src="{{'img/icons/combustible.png'}}"
                    width="19"
                    height="19"
                    style="margin-right: 7px"
                  />
                  Otros: {{vehiculo.FichaTecnica.EquipamientoAdicional}}
                </li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.mobile .singlePackage .panel-group .panel-heading {
  font-size: 12px !important;
}
</style>