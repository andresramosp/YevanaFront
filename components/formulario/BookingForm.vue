<template>
  <div v-if="reserva">
    <!-- <TopImageBar image="tapiceria" /> -->
    <div class="container" >
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
                  :src="'/img/vehiculos/YEVANA_' + reserva.Vehiculo.VehiculoID + '.jpg'"
                  alt="Furgoneta Yevana para alquilar"
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
                      <i class="fa fa-shield" aria-hidden="true"></i>Seguro:
                      <span>{{reserva.Extras.find(ex => ex.GroupID == 'Seguro').Nombre}}</span>
                    </li>
                    <li style="border-bottom: none; padding-bottom: 2px">
                      <i class="fa fa-tachometer" aria-hidden="true"></i>Kilometraje:
                      <span>{{reserva.Extras.find(ex => ex.GroupID == 'Kilometraje').Nombre}}</span>
                    </li>
                    <li style="border-bottom: none; padding-bottom: 2px">
                      <i class="fa fa-plus-square" aria-hidden="true"></i>Extras:
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
              <form v-on:submit.prevent="onGetCliente" class="form">
                <div class="row">
                  <div class="form-group col-sm-6 col-xs-12">
                    <label for>Email</label>
                    <span style="color:red">*</span>
                    <input
                      v-model="emailClienteExistente"
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
                      v-model="passwordClienteExistente"
                      type="password"
                      class="form-control"
                      id
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-sm-12 col-xs-12">
                    <input
                      style="float: right"
                      class="btn buttonTransparent"
                      type="submit"
                      id="submit2"
                      value="Accede"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-sm-8 col-sm-pull-4 col-xs-12">
            <div class="infoTitle">
              <h2 style="text-transform: none">Tus datos</h2>
            </div>
            <div class="bookingForm">
              <form v-on:submit.prevent="onSubmit" class="form">
                <div class="row">
                  <div class="form-group col-sm-6">
                    <label for>Nombre</label>
                    <span style="color:red">*</span>
                    <input type="text" v-model="form.Nombre" class="form-control" id required />
                  </div>
                  <div class="form-group col-sm-6">
                    <label for>Apellidos</label>
                    <span style="color:red">*</span>
                    <input type="text" v-model="form.Apellidos" class="form-control" id required />
                  </div>
                  <div class="form-group col-sm-6">
                    <label for>DNI/NIF</label>
                    <span style="color:red">*</span>
                    <input
                      type="text"
                      v-model="form.DNI"
                      class="form-control"
                      id="dninif"
                      pattern="[0-9]{8}[A-Za-z]"
                      required
                    />
                  </div>
                  <div class="form-group col-sm-6">
                    <label for>Dirección</label>
                    <span style="color:red">*</span>
                    <input type="text" v-model="form.Direccion" class="form-control" id required />
                  </div>
                  <div class="form-group col-sm-6">
                    <label for>Provincia</label>
                    <span style="color:red">*</span>
                    <input type="text" v-model="form.Provincia" class="form-control" id required />
                  </div>
                  <div class="form-group col-sm-6">
                    <label for>Código Postal</label>
                    <span style="color:red">*</span>
                    <input type="number" v-model="form.CP" class="form-control" id required />
                  </div>
                  <div class="form-group col-sm-6">
                    <label for>País</label>
                    <span style="color:red">*</span>
                    <div class="bookingDrop">
                      <vSelect
                        v-model="form.Pais"
                        :clearable="false"
                        :searchable="false"
                        placeholder
                        label="name"
                        :options="paisesOptions"
                        :reduce="opt => { return opt.name }"
                      ></vSelect>
                      <!-- <md-select v-model="paisCliente" class="md-no-underline selectBordered">
                    <md-option ng-value="opt.name" ng-repeat="opt in paises">{{ opt.name }}</md-option>
                      </md-select>-->
                    </div>
                  </div>
                  <div class="form-group col-sm-6">
                    <label for>Teléfono</label>
                    <span style="color:red">*</span>
                    <input type="number" v-model="form.Telefono" class="form-control" id required />
                  </div>
                  <div class="form-group col-sm-6">
                    <label for>Email</label>
                    <span style="color:red">*</span>
                    <input
                      type="email"
                      v-model="form.Email"
                      class="form-control"
                      id="email"
                      required
                    />
                  </div>
                  <div class="form-group col-sm-6">
                    <label for>Password</label>
                    <input
                      type="password"
                      ng-disabled="logueado"
                      v-model="form.Password"
                      class="form-control"
                      id
                    />
                  </div>
                  <div class="form-group">
                    <div class="col-sm-12">
                      <div class="checkbox">
                        <label>
                          <input
                            onchange="this.setCustomValidity(validity.valueMissing ? 'Antes de continuar debes aceptar los Términos y Condiciones' : '')"
                            id="terms"
                            type="checkbox"
                            required
                          />Declaro que he leído y acepto la
                           <nuxt-link :to="'/politica-privacidad'" target="_blank" class="dropdown-toggle">Política de privacidad</nuxt-link>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="buttonArea galleryBtnArea">
                      <ul class="list-inline">
                        <li>
                          <a @click="$router.go(-1)" class="btn buttonTransparent">Atrás</a>
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
import Vue from "vue";
import TopImageBar from "~/components/TopImageBar.vue";
import BookingWizard from "~/components/BookingWizard.vue";
import ReservaService from "~/services/reservaService";
import UtilidadesService from "~/services/utilidadesService";
import State from "~/services/state";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
  components: {
    BookingWizard,
    TopImageBar,
    vSelect
  },
  data() {
    return {
      reserva: null,
      form: {
        Nombre: "",
        Apellidos: "",
        DNI: "",
        Direccion: "",
        Provincia: "",
        Telefono: "",
        Email: "",
        CP: "",
        Pais: "España",
        Password: ""
      },
      emailClienteExistente: "",
      passwordClienteExistente: "",
      paisesOptions: UtilidadesService.getPaises()
    };
  },
  created() {
    const reservaObj = State.get("reserva");
    if (reservaObj) {
      this.reserva = reservaObj;
    } else {
      this.$router.push({
        path: `/alquiler-campers/`
      });
    }
  },
  methods: {
    getExtrasList() {
      return this.reserva.Extras.filter(ex => ex.Nombre && !ex.GroupID)
        .map(ex => ex.Nombre)
        .join(", ");
    },
    async onSubmit() {
      this.reserva.Cliente = this.form;
       State.set(
          "reserva",
          this.reserva,
          true
        );
      try {
        const result = await ReservaService.createReserva({...this.reserva});
        this.$router.push({
          path: `/confirmacion/`
        });
      } catch (err) {
        Vue.$toast.open({
          message:
            "Error: " + err.message,
          position: "bottom",
          type: "error",
          dismissible: true,
          duration: 5000
        });
      }
    },
    async onGetCliente() {
      try {
        this.form = await ReservaService.getCliente(
          this.emailClienteExistente,
          this.passwordClienteExistente
        );
        delete this.form["@odata.context"];
      } catch (err) {
        Vue.$toast.open({
          message:
            "El email o el password son incorrectos. Por favor vuelve a intentarlo.",
          position: "bottom",
          type: "warning",
          dismissible: true,
          duration: 5000
        });
      }
    }
  }
};
</script>