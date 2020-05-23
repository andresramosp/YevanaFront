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
  },
  head() {
    return {
      title:
        "Preguntas frecuentes para el servicio de alquiler de campers de YEVANA",
      meta: [
        {
          hid: "description-faqs",
          name: "description",
          content:
            "Resuelve todas tus dudas relativas al alquiler con YEVANA con este FAQ que hemos preparado para ti. Si tienes cualquier duda no dudes en llamarnos."
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
