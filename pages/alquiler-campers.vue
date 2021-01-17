<template>
  <div>
    <TopImageBar
      image="tapiceria"
      title="ALQUILER DE FURGONETAS CAMPER EN MADRID"
      text="TODAS NUESTRAS CAMPER CUENTAN CON NUEVAS EXPERIENCIAS DE SERIE. <br /> VISÍTANOS EN NUETRAS INSTALACIONES DE MADRID."
    />
    <section class="mainContentSection packagesSection">
      <div class="container">
        <VehiclesList
          v-if="vehicles.length > 0"
          :mode="'alquiler'"
          :vehicles="vehicles"
        />
        <div class="">
          <div class="sectionTitle">
            <h2 style="font-size: 20px; text-align: center">
              <span style="background-color: whitesmoke"
                >Alquilar una furgoneta camper con Yevana tiene muchas
                ventajas:</span
              >
            </h2>
          </div>
          <br />
          <div style="text-align: justify">
            <ul>
              <li>
                Contamos con una
                <b>amplia flota de furgonetas camperizadas</b> capaz de
                ajustarse a todas tus necesidades. Elige tamaño, color y la
                tarifa que mejor se adapte a ti. ¡Del resto nos encargamos
                nosotros!
              </li>
              <br />
              <li>
                <b>Te asesoramos</b> en tu viaje en furgoneta camper. ¿Qué puedo
                visitar? ¿Dónde puedo pernoctar? Pregúntanos... ¡Nuestro equipo
                te ayudará en la planificación de tu escapada en camper!
              </li>
              <br />
              <li>
                <b>Atención 24 horas</b>. Para nosotros el proceso de alquiler
                termina cuando haya finalizado tu viaje en furgo. Por ello
                queremos brindarte atención personalizada las 24 horas del día.
                ¡Puedes consultarnos tus dudas durante tu viaje a cualquier hora
                del día!
              </li>
              <br />
              <li>
                Nuestro taller y oficinas en Madrid cuentan con una privilegiada
                localización.
                <b>Estamos a sólo 20 minutos del centro de Madrid</b> y a 15
                minutos del aeropuerto Adolfo Suarez.
              </li>
              <br />
              <li>
                Alquila tu furgoneta camperizada en Madrid con total
                tranquilidad. Disponemos de un
                <b>seguro a todo riesgo con asistencia en carretera.</b>
                Además, antes de iniciar tu viaje en camper, te explicaremos al
                detalle todo su funcionamiento. ¡Prepárate para una experiencia
                única!
              </li>
              <br />
              <li>
                Nuestras furgonetas camper están
                <b>totalmente equipadas</b> para que puedas disfrutar de tu
                deporte favorito sea donde sea. Tanto si eres de montaña como de
                playa no te preocupes por las temperaturas: ¡Un innovador
                sistema de calefacción y aire acondicionado hará que te sientas
                como en casa!
              </li>
              <br />
              <div 
              class="loadWithScroll" 
              percentVisible="5" id="videoYoutube"
              style="text-align: center; margin: 15px" 
              :class="`${$device.isMobile ? 'video-responsive': ''}`">
                <iframe
                  v-if="videoYoutubeVisible"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/AKyTV9y1Wug"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <li>
                Tenemos los
                <b>precios de alquiler más competitivos del mercado.</b>
                Disfruta de la oferta que mejor se ajuste a ti y aprovéchate de
                los descuentos de larga estancia que hemos preparado... ¡Tus
                vacaciones en camper te esperan! única!
              </li>
            </ul>
            <br />
          </div>
        </div>
      </div>
    </section>
    <section
      class="mainContentSection packagesSection"
      style="background: white; text-align: justify"
    >
      <div class="container">
        <div>
          El alquiler de furgonetas camper se ha convertido en una de las
          modalidades de viaje preferidas por los usuarios en los últimos años.
          La posibilidad de elegir con total libertad tu ruta y los lugares
          donde pernoctar han conseguido que viajar en camper esté más de moda
          que nunca. En Yevana Camper fabricamos furgonetas totalmente equipadas
          para que sólo te tengas que preocupar de disfrutar de tu viaje.
          Nuestras furgonetas camperizadas disponen de Televisión HD, Salón con
          mesa reconvertible en cama doble, nevera, fregadero, cocina a gas,
          ducha exterior, aire acondicionado, calefacción estacionaria y un
          sinfín de extras que harán de tu viaje una experiencia única.
        </div>
        <br />
        <div>
          <h2 style="font-size: 15px">
            <span style="background-color: transparent"
              >¿Estás pensando en alquilar una camper en Madrid? Estás en el
              sitio correcto</span
            >
          </h2>
          Tenemos una dilatada experiencia no sólo como camperizadores sino
          también en el servicio de alquiler con nuestras vans. El proceso es
          muy fácil: Mira todos los modelos que tenemos disponibles, escoge la
          camper que más se ajusta a tus gustos y necesidades, elige la fecha
          que quieres y envía tu reserva. Contestaremos a tu petición en menos
          de 24 horas. ¿Y después? Muy fácil: Te guiaremos en todo el proceso
          hasta el día de la reserva.
        </div>
        <br />
        <div>
          ¿Y lo mejor? Fabricamos nuestros propios modelos, camperizados al
          milímetro con los materiales más vanguardistas del mercado, para que
          te sientas como en tu propio hogar cuando estés dentro de ellas.
          ¡Recuerda además que somos Petfriendly por lo que tu mascota puede
          viajar contigo!
        </div>
        <br />
        <div>
          Descubre los rincones más fascinantes del mundo con las furgonetas
          camper de Yevana: Amanece en una playa y atardece en la montaña,
          desayuna cerca del mar o pernocta en el centro de tu ciudad favorita.
          ¿Tienes dudas sobre donde pernoctar o qué visitar? Escríbenos antes de
          iniciar tu viaje y te recomendaremos rutas y lugares para visitar.
          ¡Además si tienes dudas o cualquier problema durante tu viaje podrás
          contactar con nosotros las 24 horas del día!
        </div>
        <br />
        <div>
          Si todavía no te has convencido para alquilar una camper visita
          nuestro perfil de google y mira lo que opinan nuestros clientes sobre
          nosotros o visita nuestros perfiles en redes sociales y déjate seducir
          por nuestras campervans. ¿Quieres venir a conocernos y ver las furgo
          camper disponibles? No hay problema, puedes concertar una cita previa
          y te recibiremos encantados. Yevana Camper: ¡tu servicio de alquiler
          de campers en la Comunidad de Madrid de confianza!
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VehiclesList from "~/components/alquileres/VehiclesList.vue";
import TopImageBar from "~/components/TopImageBar.vue";
import State from "~/services/state";
import VehicleService from "~/services/vehicleService";
import homeMixins from "~/mixins/homeMixin";
export default {
  components: {
    VehiclesList,
    TopImageBar,
  },
   mixins: [homeMixins],
  data() {
    return {
      vehicles: [],
    };
  },
  async asyncData({ params }) {
    const result = await VehicleService.getAll();
    return {
      vehicles: result,
      videoYoutubeVisible: false,
    };
  },
  created() {
    State.menuOpen = false;
    State.activePage = "Alquiler";
    State.menuOpaque = true;
    State.footerVisible = true;
    State.menuVisible = true;
    // this.$nextTick(async () => {
    //   if (process.client) {
    //     this.$nuxt.$loading.start();
    //     this.vehicles = await VehicleService.getAll();
    //     this.$nuxt.$loading.finish();
    //   }
    // });
  },
  head() {
    return {
      title: "Alquiler de furgonetas camper en Madrid | YEVANA CAMPER",
      meta: [
        {
          hid: "description-alquileres",
          name: "description",
          content:
            "Alquiler de furgonetas camper en Madrid ✅ Mejores Precios desde 70€ ✅ Reserva online tu campervan ✅ Seguro a todo riesgo. ¡Alquila tu furgoneta camperizada!",
        },
      ],
    };
  },
};
</script>

<style scoped>
ul li {
  list-style-type: circle;
}
</style>
