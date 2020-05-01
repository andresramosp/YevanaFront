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
