<template>
  <no-ssr>
    <div v-if="render()" id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <a :href="'/img/vehiculos/YEVANA_' + id + '_1.jpg'" 
            rel="gallery-1" class="swipebox" 
            :id="refId" >
            <img
              class="img-responsive"
              :src="'/img/vehiculos/YEVANA_' + id + '_1.jpg'"
              style="width: 100%; height: 100%"
            />
          </a>
        </div>

        <div v-for="imgNumber in images" :key="imgNumber" class="item">
          <a
            :href="'/img/vehiculos/YEVANA_' + id + '_' + imgNumber + '.jpg'"
            rel="gallery-1"
            class="swipebox"
          >
            <img
              class="img-responsive"
              :src="'/img/vehiculos/YEVANA_' + id + '_' + imgNumber + '.jpg'"
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
  </no-ssr>
</template>
<script>
export default {
  data() {
    return {
      images: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };
  },
  methods: {
    render() {
      return (this.$device.isMobile && this.refId == 'mobile') 
      || (!this.$device.isMobile && this.refId == 'web');
    }
  },
  mounted() {
    if (this.render()) {
        $("#" +  this.refId).swipebox();
      }
      
  },
  props: ["id", "refId"]
};
</script>