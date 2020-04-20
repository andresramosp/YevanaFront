<template>
  <div>
    <BookingImageBar />
    <div class="container">
      <section class="mainContentSection singlePackage">
        <BookingWizard v-if="!$device.isMobile" step="2" />
        <div class="row">
          <div class="col-sm-4 col-sm-push-8 col-xs-12">
            <!--Panel Detalle-->
            <aside>
              <div class="infoTitle" style="text-transform: none">
                <h2 style="text-transform: none">Tu reserva</h2>
              </div>
              <div class="bookDetailsInfo">
                <img
                  style="display: block; width: 100%; max-width: 400px"
                  :src="require('~/assets/Vehiculos/YEVANA_' + reserva.Vehiculo.VehiculoID + '.jpg')"
                  alt="Furgoneta Yevana para alquilar"
                  @click="null"
                />

                <div class="infoArea">
                  <h3 style="margin-bottom: 10px">{{reserva.Vehiculo.Nombre}}</h3>
                  <ul class="list-unstyled" style="margin-bottom: 20px">
                    <li style="border-bottom: none; padding-bottom: 2px">
                      <i class="fa fa-calendar" aria-hidden="true"></i>Desde
                      <span>{{new Date(reserva.Desde).toCustomString()}}</span>
                    </li>
                    <li style="border-bottom: none; padding-bottom: 2px">
                      <i class="fa fa-calendar" aria-hidden="true"></i>Hasta:
                      <span>{{new Date(reserva.Hasta).toCustomString()}}</span>
                    </li>
                    <li style="border-bottom: none; padding-bottom: 2px">
                      <i class="fa fa-user" aria-hidden="true"></i>Seguro:
                      <span>{{'seguro'}}</span>
                    </li>
                    <li style="border-bottom: none; padding-bottom: 2px">
                      <i class="fa fa-user" aria-hidden="true"></i>Kilometraje:
                      <span>{{'kilometraje'}}</span>
                    </li>
                    <li style="border-bottom: none; padding-bottom: 2px">
                      <i class="fa fa-user" aria-hidden="true"></i>Extras:
                      <span>{{getExtrasList()}}</span>
                    </li>
                  </ul>
                  <div class="priceTotal">
                    <h2>
                      Total:
                      <span>{{reserva.Desglose.Precio}} &#8364;</span>
                    </h2>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <!--Recuperación de Cliente-->
          <div class="col-sm-8 col-sm-pull-4 col-xs-12">
            <div class="infoTitle">
              <h2 style="text-transform: none">¿Ya eres cliente?</h2>
            </div>
            <div class="bookingForm">
              <!-- <form ng-submit="getClienteExistente()" class="form">
            <div class="row">
              <div class="form-group col-sm-6 col-xs-12">
                <label for>Email</label>
                <span style="color:red">*</span>
                <input
                  ng-model="emailClienteExistente"
                  type="email"
                  class="form-control"
                  id
                  required
                />
              </div>
              <div class="form-group col-sm-6 col-xs-12">
                <label for>Password</label>
                <span style="color:red">*</span>
                <input
                  ng-model="passwordClienteExistente"
                  type="password"
                  class="form-control"
                  id
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="form-group col-sm-offset-10">
                <input class="btn buttonTransparent" type="submit" id="submit2" value="Accede" />
              </div>
            </div>
              </form>-->
            </div>
          </div>
          <div class="col-sm-8 col-sm-pull-4 col-xs-12">
            <div class="infoTitle">
              <h2 style="text-transform: none">Tus datos</h2>
            </div>
            <div class="bookingForm">
              <form class="form">
                <div class="row">
                  <div class="form-group col-sm-6 col-xs-12">
                    <label for>Nombre</label>
                    <span style="color:red">*</span>
                    <input type="text" v-model="nombreCliente" class="form-control" id required />
                  </div>
                  <div class="form-group col-sm-6 col-xs-12">
                    <label for>Apellidos</label>
                    <span style="color:red">*</span>
                    <input type="text" v-model="apellidosCliente" class="form-control" id required />
                  </div>
                  <div class="form-group col-sm-6 col-xs-12">
                    <label for>DNI/NIF</label>
                    <span style="color:red">*</span>
                    <input
                      type="text"
                      v-model="dniCliente"
                      class="form-control"
                      id="dninif"
                      pattern="[0-9]{8}[A-Za-z]"
                      required
                    />
                  </div>
                  <div class="form-group col-sm-6 col-xs-12">
                    <label for>Dirección</label>
                    <span style="color:red">*</span>
                    <input type="text" v-model="direccionCliente" class="form-control" id required />
                  </div>
                  <div class="form-group col-sm-6 col-xs-12">
                    <label for>Provincia</label>
                    <span style="color:red">*</span>
                    <input type="text" v-model="provinciaCliente" class="form-control" id required />
                  </div>
                  <div class="form-group col-sm-6 col-xs-12">
                    <label for>Código Postal</label>
                    <span style="color:red">*</span>
                    <input type="number" v-model="cpCliente" class="form-control" id required />
                  </div>
                  <div class="form-group col-sm-6 col-xs-12">
                    <label for>País</label>
                    <span style="color:red">*</span>
                    <div class="bookingDrop">
                      <!-- <md-select v-model="paisCliente" class="md-no-underline selectBordered">
                    <md-option ng-value="opt.name" ng-repeat="opt in paises">{{ opt.name }}</md-option>
                      </md-select>-->
                    </div>
                  </div>
                  <div class="form-group col-sm-6 col-xs-12">
                    <label for>Teléfono</label>
                    <span style="color:red">*</span>
                    <input type="number" v-model="telefonoCliente" class="form-control" id required />
                  </div>
                  <div class="form-group col-sm-6 col-xs-12">
                    <label for>Email</label>
                    <span style="color:red">*</span>
                    <input
                      type="email"
                      v-model="emailCliente"
                      class="form-control"
                      id="email"
                      required
                    />
                  </div>
                  <div class="form-group col-sm-6 col-xs-12">
                    <label for>Password</label>
                    <input
                      type="password"
                      ng-disabled="logueado"
                      v-model="passwordCliente"
                      class="form-control"
                      id
                    />
                  </div>
                  <div class="form-group">
                    <div class="col-sm-12">
                      <div class="checkbox">
                        <label>
                          <input
                            v-model="condicionesAceptadas"
                            onchange="this.setCustomValidity(validity.valueMissing ? 'Antes de continuar debes aceptar los Términos y Condiciones' : '')"
                            id="terms"
                            type="checkbox"
                            required
                          />Declaro que he leído y acepto la
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/politica-privacidad.html"
                          >política de privacidad</a>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="buttonArea galleryBtnArea">
                      <ul class="list-inline">
                        <li>
                          <a href="javascript:history.back(-1);" class="btn buttonTransparent">Atrás</a>
                        </li>
                        <li class="pull-right">
                          <input
                            class="btn buttonTransparent"
                            type="submit"
                            id="submit"
                            value="Confirmar"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BookingImageBar from "~/components/BookingImageBar.vue";
import BookingWizard from "~/components/BookingWizard.vue";
import State from "~/services/state";
export default {
  components: {
    BookingWizard,
    BookingImageBar
  },
  data() {
    return {
      reserva: State.get("reserva")
    };
  },
  methods: {
    getExtrasList() {
      return this.reserva.Extras
        .filter(ex => ex.Nombre)
        .map(ex => ex.Nombre)
        .join(", ");
    }
  }
};
</script>