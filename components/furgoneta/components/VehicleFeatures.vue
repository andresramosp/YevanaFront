<template>
  <div class="panel-group hotelDescription" id="accordionIcons">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Vehículo" active>
          <b-card-text>
            <!-- CARACTERÍSTICAS TÉCNICAS -->
            <div class>
              <div class="row">
                <div class="col-xs-12 col-sm-6">
                  <ul class="descriptionList">
                    <li>
                      <img
                        :src="require('~/assets/icons/furgo.png')"
                        width="19"
                        height="19"
                        style="margin-right: 7px"
                      />
                      <!-- <b>Modelo:</b> -->
                      Modelo
                      {{vehicle.FichaTecnica.MarcaModelo}}
                    </li>
                    <li>
                      <img
                        :src="require('~/assets/icons/motor.png')"
                        width="19"
                        height="19"
                        style="margin-right: 7px"
                      />
                      <!-- <b>Motor:</b> -->
                      Motor de
                      {{vehicle.FichaTecnica.Motor}}
                    </li>
                    <li>
                      <img
                        :src="require('~/assets/icons/combustible.png')"
                        width="19"
                        height="19"
                        style="margin-right: 7px"
                      />
                      <!-- <b>Capacidad Combustible:</b> -->
                      Depósito de
                      {{vehicle.FichaTecnica.CapacidadCombustible}} L
                    </li>
                    <li>
                      <img
                        :src="require('~/assets/icons/combustible.png')"
                        width="19"
                        height="19"
                        style="margin-right: 7px"
                      />
                      Combustible
                      <!-- <b>Tipo Combustible:</b> -->
                      {{vehicle.FichaTecnica.Combustible}}
                    </li>
                    <li>
                      <img
                        :src="require('~/assets/icons/combustible.png')"
                        width="19"
                        height="19"
                        style="margin-right: 7px"
                      />
                      <!-- <b>Consumo:</b> -->
                      Consume
                      {{vehicle.FichaTecnica.Consumo}}
                    </li>
                  </ul>
                </div>
                <div class="col-xs-12 col-sm-6">
                  <ul class="descriptionList">
                    <li>
                      <img
                        :src="require('~/assets/icons/dimensiones.png')"
                        width="19"
                        height="19"
                        style="margin-right: 7px"
                      />
                      Dimensiones
                      {{vehicle.FichaTecnica.Tamanio}}
                    </li>
                    <li>
                      <img
                        :src="require('~/assets/icons/asiento.png')"
                        width="19"
                        height="19"
                        style="margin-right: 7px"
                      />
                      Con
                      {{vehicle.FichaTecnica.NumeroAsientos}} asientos
                    </li>
                    <li>
                      <img
                        :src="require('~/assets/icons/climatizacion.png')"
                        width="19"
                        height="19"
                        style="margin-right: 7px"
                      />
                      <!-- <b>Climatización:</b> -->
                      {{vehicle.FichaTecnica.Climatizacion}}
                    </li>
                    <li>
                      <img
                        :src="require('~/assets/icons/radio.png')"
                        width="19"
                        height="19"
                        style="margin-right: 7px"
                      />
                      <!-- <b>Radio:</b> -->
                      {{vehicle.FichaTecnica.Radio}}
                    </li>
                    <li v-if="vehicle.FichaTecnica.Adicional">
                      <img
                        :src="require('~/assets/icons/consumo.png')"
                        width="19"
                        height="19"
                        style="margin-right: 7px"
                      />
                      <b>Otros:</b>
                      {{vehicle.FichaTecnica.Adicional}}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </b-card-text>
        </b-tab>
        <!-- EQUIPAMIENTO -->
        <b-tab title="Equipamiento">
          <b-card-text>
            <div class>
              <ul>
                <li v-for="categoria in categoriasEquipamiento" :key="categoria">
                  <div class="row">
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <b>
                        <img
                          :src="require('~/assets/icons/' + StringService.snakeize(categoria.toLowerCase()) +'.png')"
                          :width="!$device.isMobile ? 20 : 22"
                          :height="!$device.isMobile ? 20 : 22"
                          style="margin-right: 5px"
                        />
                        <span v-if="!$device.isMobile">{{categoria}}</span>
                      </b>
                    </div>
                    <div class="col-md-9 col-sm-9 col-xs-9">
                      <div class="row">
                        <div
                          v-for="equip in vehicle.FichaTecnica.EquipamientoItems"
                          :key="equip.Nombre"
                        >
                          <div
                            v-if="equip.Categoria == categoria"
                            class="col-md-6"
                            style="margin-bottom: 10px; font-size: 13px"
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
          </b-card-text>
        </b-tab>
        <!-- EXTRAS -->
        <b-tab title="Extras">
          <b-card-text>
            <div class>
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
                        <span>
                          <img
                            :src="require('~/assets/icons/' + StringService.snakeize(item.Nombre.toLowerCase()) +'.png')"
                            :width="!$device.isMobile ? 20 : 22"
                            :height="!$device.isMobile ? 20 : 22"
                            style="margin-right: 5px"
                          />
                          {{item.Nombre}}
                        </span>
                        <i class="indicator fa fa-plus-square pull-right"></i>
                        <span class="pull-right" style="margin-right: 10px">
                          {{item.Precio}} €{{item.Calculo == 'Diario' ? '/día' : ''}}
                          {{item.PrecioMaximo && !$device.isMobile ? ('- Máximo: ' + item.PrecioMaximo) : ''}}
                        </span>
                      </a>
                      <div :id="'collapseExtra' + item.ExtraID" class="panel-collapse collapse">
                        <div class>
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
          </b-card-text>
        </b-tab>
        <!-- CALENDARIO -->
        <b-tab v-if="!$device.isMobile" title="Calendario">
          <b-card-text>
            <div class>
              <img src="/img/alquileres/calendarioTemporadas.png" width="720" />
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
            </div>
          </b-card-text>
        </b-tab>
        <!-- SEGURO -->
        <b-tab title="Seguro">
          <b-card-text>
            <div class style="text-align: justify">
              Todas nuestras reservas cuentan con un seguro a todo riesgo con franquicia, asistencia 24 horas y atención telefónica directa con el personal de Yevana para cualquier duda o circunstancia durante tu viaje por España, Europa o países Ribereños del Mediterráneo.
              <br />
              <br />La franquicia del seguro básico es de 850€ y tendrás que dejarla como depósito al inicio de la reserva.
              Con el seguro Plus la franquicia y el depósito se reducen a 250€. Además obtendrás cobertura de ruedas y lunas a todo riesgo sin penalización de la franquicia en caso de daños y también podrás añadir un segundo conductor.
              <br />
              <br />A continuación puedes ver un cuadro comparativo de las coberturas de ambos seguros:
              <br />
              <br />

              <table class="table" style="font-size: 13px">
                <thead>
                  <tr>
                    <th scope="col">Seguros</th>
                    <th scope="col">Todo riesgo 850€</th>
                    <th scope="col">Todo riesgo Plus 250€</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Asistencia en carretera</th>
                    <td>Sí</td>
                    <td>Sí</td>
                  </tr>
                  <tr>
                    <th scope="row">Daños ext/int</th>
                    <td>850 Eur</td>
                    <td>250 Eur</td>
                  </tr>
                  <tr>
                    <th scope="row">Ventanas/lunas</th>
                    <td>No</td>
                    <td>Sí</td>
                  </tr>
                  <tr>
                    <th scope="row">Ruedas</th>
                    <td>No</td>
                    <td>Sí</td>
                  </tr>
                  <tr>
                    <th scope="row">Nº Conductor</th>
                    <td>1</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>

              <div v-if="!$device.isMobile">
                El coste del seguro plus va reduciéndose a medida que aumentan los días de tu reserva, a continuación puedes ver un cuadro con el coste diario de añadir Seguro Plus a tu reserva:
                <br />
                <br />

                <img src="/img/alquileres/tablaSeguro.png" width="720" />

                <br />
                <br />
              </div>

              <span style="text-align: center; font-weight: bold">KILOMETRAJE ILIMITADO</span>
              <br />
              <br />Todas nuestras reservas cuentan con 200Km/día. El kilómetro extra tiene un coste de 0.20cts €
              Puedes contratar kilometraje ilimitado por 25€ al día.
            </div>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import StringService from "~/services/stringService";
export default {
  data() {
    return {
      categoriasEquipamiento: [],
      StringService
    };
  },
  props: ["vehicle", "extras"],
  mounted() {
    const categorias = this.vehicle.FichaTecnica.EquipamientoItems.map(
      eq => eq.Categoria
    );
    this.categoriasEquipamiento = Array.from(new Set(categorias));
  },
  methods: {}
};
</script>

<style scoped>
.mobile .singlePackage .panel-group .panel-heading {
  font-size: 12px !important;
}
.singlePackage .panel-group .panel-heading {
  font-size: 14px !important;
}
.accordionsTransparent {
  padding-left: 0px;
  padding-right: 0px;
}
.accordionsTransparent .media-body {
  padding: 5px;
}
.accordionsTransparent .media-body p {
  font-size: 12px !important;
}
</style>