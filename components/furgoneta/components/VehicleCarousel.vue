<template>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <a
          :href="'/assets/Vehiculos/YEVANA_' + id + '_1.jpg'"
          rel="gallery-1"
          class="swipebox"
        >
          <img
            class="img-responsive"
            :src="require('~/assets/Vehiculos/YEVANA_' + id + '_1.jpg')"
            style="width: 100%; height: 100%"
          />
        </a>
      </div>

      <div v-for="imgNumber in images" :key="imgNumber" class="item">
        <a
          :href="'/assets/Vehiculos/YEVANA_' + id + '_' + imgNumber + '.jpg'"
          rel="gallery-1"
          class="swipebox"
        >
          <img
            class="img-responsive"
            :src="require('~/assets/Vehiculos/YEVANA_' + id + '_' + imgNumber + '.jpg')"
            style="width: 100%; height: 100%"
          />
        </a>
      </div>
    </div>

    <a class="left carousel-control" data-target="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" data-target="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>
<script>
export default {
    data() {
        return {
            images: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        }
    },
    props: ["id"]
}
</script>