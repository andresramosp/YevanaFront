<template>
    
<div v-if="reserva" class="main-wrapper">


    <!-- PAGE TITLE -->
  <TopImageBar image="carretera" />
    <!-- WHITE SECTION FILTER-->
    <section class="mainContentSection">
        <div class="container">
            <div class="row bookingConfirmed">
                <div class="col-xs-12">
                    <div class="alert alert-success alert-dismissible" role="alert">
                        <!--<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">Dismiss</span></button>-->
                        Gracias! Tu solicitud ha sido recibida. Hemos enviado un email a <span style="color:blue">{{reserva.Cliente.Email}} </span> con los datos de la reserva.
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="infoTitle">
                        <h2>Tu reserva</h2>
                    </div>
                    <div class="confirmDetilas">
                        <!-- <img :src="'/img/Vehiculos/YEVANA_' + reserva.Vehiculo.VehiculoID + '.jpg'" style="width: 70%" /> -->
                        <div class="confirmInfo" style="padding: 0px 0px 0px 0px">
                            <p>Estos son los datos de tu solicitud. En breve nos pondremos en contacto contigo para confirmarte la disponibilidad de la reserva. Para cualquier duda o modificación no dudes en ponerte en <a href="/contacto.html">contacto</a> con nosotros.</p>
                            <div class="row infoArea">
                                <div class="col-sm-4 col-xs-12">
                                    
                                    <ul class="list-unstyled" style="margin-bottom: 20px">
                                        <li style="border-bottom: none; padding-bottom: 2px"><i class="fa fa-truck" aria-hidden="true"></i>Furgoneta:  <span>{{reserva.Vehiculo.Nombre.replace('Furgoneta ', '')}}</span></li>
                                        <li style="border-bottom: none; padding-bottom: 2px"><i class="fa fa-calendar" aria-hidden="true"></i>Desde:  <span>{{new Date(reserva.Desde).toCustomString()}}</span></li>
                                        <li style="border-bottom: none; padding-bottom: 2px"><i class="fa fa-calendar" aria-hidden="true"></i>Hasta:  <span>{{new Date(reserva.Hasta).toCustomString()}}</span></li>
                                    </ul>

                                </div>
                                <div class="col-sm-4 col-xs-12">
                                    
                                    <ul class="list-unstyled" style="margin-bottom: 20px">
                                        <li style="border-bottom: none; padding-bottom: 2px"><i class="fa fa-shield" aria-hidden="true"></i>
                                            Seguro:  <span>{{reserva.Extras.find(ex => ex.GroupID == 'Seguro').Nombre}}</span>
                                        </li>
                                        <li style="border-bottom: none; padding-bottom: 2px"><i class="fa fa-tachometer" aria-hidden="true"></i>
                                            Kilometraje:  <span>{{reserva.Extras.find(ex => ex.GroupID == 'Kilometraje').Nombre}}</span>
                                        </li>
                                        <li ng-show="extras != ''" style="border-bottom: none; padding-bottom: 2px"><i class="fa fa-plus-square" aria-hidden="true"></i>
                                            Extras:  <span>{{getExtrasList()}}</span>
                                        </li>
                                    </ul>

                                </div>
                                <div class="col-sm-4 col-xs-12">
                                    <div class="priceTotal" style="padding-top: 15px">
                                        <h2 >Total: <span>{{reserva.Desglose.Precio}} &#8364;</span></h2>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>





</template>

<script>
import Vue from "vue";
import TopImageBar from "~/components/TopImageBar.vue";
import State from "~/services/state";
export default {
  components: {
      TopImageBar
  },
  data() {
    return {
      reserva: null
    };
  },
  created() {
    const reservaObj = State.get("reserva");
    // State.set("reserva", null, true);
    if (reservaObj) {
      this.reserva = reservaObj;
    } else {
      this.$router.push({
        path: `/alquileres/`
      });
    }
  },
  methods: {
      getExtrasList() {
      return this.reserva.Extras.filter(ex => ex.Nombre && !ex.GroupID)
        .map(ex => ex.Nombre)
        .join(", ");
    },
  }
};
</script>