    <template>
  <section class="whiteSection" style="padding-top: 0px !important">
    <div id="fb-root"></div>
    <script
      async
      defer
      crossorigin="anonymous"
      src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v6.0"
    ></script>
    <div
      style="background-image: url('img/home/conocenos.jpg'); background-repeat: no-repeat; width: 100%; background-position: center; background-size: cover; min-height: 500px "
    >
      <div class="row">
        <div class="col-lg-5 col-md-5 col-xs-12 conocenos">
          <div class="promotionInfo" style="color: white !important">
            <h3 style="color: white">CONÓCENOS</h3>
            <span>
              Síguenos y descubre las experiencias que han vivido nuestros clientes en sus vacaciones sobre ruedas.
              Además podrás mantenerte al día sobre descuentos, promociones y mucho más.
              <br />
              <br />
            </span>
            <span style="font-weight: bold">¡Anímate y forma parte de la experiencia Camper!</span>
            <br />
            <br />
            <div class="footerContent" style="margin-top: 10px">
              <ul class="list-inline">
                <li>
                  <a href="https://www.facebook.com/YevanaCAMPER/">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/yevanacamper/?utm_source=ig_profile_share&igshid=1bduig0tl3rn2"
                  >
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@yevana.com">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-7 col-xs-12 facebook">
          <div
            class="fb-page"
            data-href="https://www.facebook.com/YevanaCAMPER/"
            data-tabs="timeline"
            :data-width="getData(500, 320)"
            data-height="420"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote cite="https://www.facebook.com/YevanaCAMPER/" class="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/YevanaCAMPER/">Yevana camper</a>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  created() {
    // (function(d, s, id) {
    //   var js,
    //     fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) return;
    //   js = d.createElement(s);
    //   js.id = id;
    //   js.src = "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v3.2";
    //   fjs.parentNode.insertBefore(js, fjs);
    // })(document, "script", "facebook-jssdk");
  },
  methods: {
    getCaptionClass(desktop, mobile) {
      return !this.$device.isMobile ? desktop : mobile;
    },
    getData(desktop, mobile) {
      return !this.$device.isMobile ? desktop : mobile;
    }
  }
};
</script>
<style scoped>
.desktop .facebook {
  padding-left: 150px;
  padding-right: 35px;
  padding-top: 50px;
  padding-bottom: 25px;
}
.desktop .conocenos {
  padding: 80px;
}
.mobile .facebook {
  /* padding-left: 35px;
  padding-right: 35px; */
  /* padding-top: 50px;  */
  padding-bottom: 25px;
  text-align: center;
}
.mobile .conocenos {
  padding: 35px;
}
.mobile .row {
  margin: 0px !important;
}
</style>



