<template>
  <section class="packagesSection">
    <div class="container">
      <BookingFaqs />
    </div>
  </section>
</template>

<script>
import State from "~/services/state";
import BookingFaqs from "~/components/bookingFaqs/BookingFaqs.vue";
export default {
  components: {
    BookingFaqs
  },
  mounted() {
    State.activePage = "Faqs";
    State.menuOpaque = true;
    State.footerVisible = true;
    State.menuVisible = true;
    State.menuOpen = false;
  },
  head() {
    return {
      title:
        "Resuelve tus dudas sobre el alquiler de furgonetas camper en Madrid",
      meta: [
        {
          hid: "description-faqs",
          name: "description",
          content:
            "Resueve todas tus dudas relativas al alquiler y venta de campers en Madrid. En Yevana hemos preparado estas FAQs para dar respuesta a todas tus preguntas"
        }
      ]
    };
  }
};
</script>

<style scoped>
.mobile .container {
  width: 100%;
}
.desktop .packagesSection {
  padding-top: 80px;
}
.mobile .packagesSection {
  padding-top: 50px;
}

</style>
