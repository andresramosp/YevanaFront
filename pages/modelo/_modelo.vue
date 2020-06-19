<template>
  <div>
    <section>
      <div>
        <video id="myVideo" controls width="100%" allow="autoplay" preload="auto" muted>
          <source
            src="https://www.dropbox.com/s/ff14kruh25mwuxz/videoDockerMobile.mp4?raw=1"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
    <div class="previews-wrap">
      <div>
        <div class="preview-item false">
          
          <div class="preview-item__content">
            <h3>Vehicles that fit your lifestyle</h3>
            <p>Find the best car for your life in just a few clicks, &amp; see true vehicle details and standard features listed.</p>
          </div>
          <img alt="car" src="https://caroogo.com/static/img/home_page_car_buying_img1.jpg" />
        </div>
      </div>
      <div>
        <div class="preview-item right-img">
          <div class="preview-item__content">
            <h3>Pricing &amp; Financing without Haggling</h3>
            <p>Calculate, customize, and compare bottom line pricing right off the bat &amp; get no risk, pre-qualification in minutes.</p>
          </div>
           <img alt="car" src="https://caroogo.com/static/img/home_page_car_buying_img2.jpg" />
        </div>
      </div>
      <div>
        <div class="preview-item false">
          <div class="preview-item__content">
            <h3>Find &amp; Buy on Your Terms and Time</h3>
            <p>Since you’re the one behind the wheel, you can take charge of your car buying experience from selecting a vehicle &amp; customizing payment, all the way through scheduling delivery.</p>
          </div>
           <img alt="car" src="https://caroogo.com/static/img/home_page_car_buying_img3.jpg" />
        </div>
      </div>
    </div>
    <section></section>
  </div>
</template>

<script>
import State from "~/services/state";
import homeMixins from "~/mixins/homeMixin";
export default {
  components: {},
  mixins: [homeMixins],
  async asyncData({ params }) {
    return {
      modelo: params.modelo
    };
  },
  mounted() {
    if (process.client) {
      let video = document.querySelector("video");
      video.play();
    }
  },
  created() {
    State.menuOpen = false;
    State.activePage = "Modelos";
    State.menuOpaque = true;
  },
  head() {
    return {
      title: "¡Echa un ojo a nuestro modelo de serie Docker! | YEVANA | Madrid",
      meta: [
        {
          hid: "description-furgo",
          name: "description",
          content: "Diseño de modelos docker"
        }
      ]
    };
  }
};
</script>

<style>
.previews-wrap {
  margin-top: -6px;
}
.preview-item {
    display: flex;
    align-items: center;
    justify-content: center;
}
.preview-item > img {
    width: 50%;
}
img {
    vertical-align: middle;
    border-style: none;
}
.preview-item__content {
    position: relative;
    width: 50%;
    padding: 0 2.1875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.preview-item__content p {
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.5rem;
    width: 28.75rem;
    max-width: 100%;
    padding-right: 0.9375rem;
    color: #A1AEB7;
}
.preview-item__content h3 {
    width: 28.75rem;
    max-width: 100%;
    color: #505D68;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.938rem;
    text-transform: capitalize;
    margin-bottom: 0.9375rem;
}

.preview-item.right-img {
    flex-direction: row-reverse;
}
@media (max-width: 991px) {
  .preview-item {
      display: block;
  }
}
@media (max-width: 767px) {
  .preview-item {
      flex-flow: column nowrap;
  }
}
@media (max-width: 991px)
{
  .preview-item__content {
      width: 100%;
      padding: 1.875rem 1.875rem 3.125rem;
      align-items: flex-start;
      justify-content: flex-start;
  }
}
@media (max-width: 991px) {
  .preview-item__content p {
      width: 100%;
  }
}

@media (max-width: 767px) {
  .preview-item.right-img {
      flex-direction: column;
  }
}

@media (max-width: 991px) {
.preview-item > img {
    width: 100%;
}
}


</style>
