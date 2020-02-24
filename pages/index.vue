<template>
  <div>
    <MainCarousel />
    <section v-if="!$device.isMobile" class="blackSection">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div style="text-align: center">
              <span style="color: white; font-size: 25px">
                ALQUILA O COMPRA UNA DE NUESTRAS ROADSUITES Y
                <a
                  style="color: #ff891e; font-size: 25px"
                  href="/alquileres"
                  class="dropdown-toggle"
                >ESCÁPATE</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <VehiclesGrid />
    <section class="promotionWrapper">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="promotionTable">
              <div class="promotionTableInner">
                <div class="promotionInfo">
                  <h2>Engineering Van Art</h2>
                  <span>La belleza está en los detalles</span>
                  <br />
                  <br />
                  <!--<a href="javscript:void(0)" style="color: white" class="btn buttonTransparent">Personaliza tu VAN</a>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="whiteSection">
      <div style="padding-left: 35px; padding-right: 35px">
        <div class="row">
          <div class="col-xs-12">
            <div class="media destinations">
              <a class="media-left">
                <img class="media-object" src="img/home/asientos.png" alt="Destination" />
              </a>
              <div class="media-body">
                <h3>Configura tu espacio</h3>
                <p>
                  Te proporcionamos distintos tipos de asientos para que configures tu espacio. Todos están homologados para viajar. Somos distribuidores de Scopema, Scora y OKB en Madrid, podrás solicitar sobre catálogo cualquier asiento que necesites con sus respectivos suelos técnicos para el anclaje al vehículo. Además te ofrecemos la posibilidad de montaje e instalación del suelo técnico y el asiento, así como el tapizado del mismo con telas de alta calidad y durabilidad.
                  <br />
                  <br />Si buscas complementos camper o maderas para su construcción, contacta con nosotros.
                </p>
                <!--<div class="media-btn">
                                    <a href="javascript:void(0)" class="btn buttonTransparent">Personaliza tu Camper</a>
                </div>-->
                <div style="padding-top: 0px; display: flex">
                  <img src="img/home/logoOkb.png" width="150" alt="Logo de OKB" />
                  <img src="img/home/logoRib.png" width="150" alt="Logo de RIB" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="whiteSection" style="padding-top: 0px !important">
      <div
        style="background-image: url('img/home/conocenos.jpg'); background-repeat: no-repeat; width: 100%; background-position: center; background-size: cover; min-height: 500px "
      >
        <div class="row">
          <div class="col-xs-5" style="padding: 75px 35px 35px 100px; ">
            <div class="promotionInfo" style="color: white !important">
              <h2 style="color: white">CONÓCENOS</h2>
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
          <div class="col-xs-7">
            <div
              style="padding-top: 40px; padding-bottom: 40px; padding-left: 20%"
              class="fb-page"
              data-href="https://www.facebook.com/YevanaCAMPER/"
              data-tabs="timeline"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
              data-width="500"
              data-height="420"
            >
              <blockquote
                cite="https://www.facebook.com/YevanaCAMPER/"
                class="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/YevanaCAMPER/">Yevana camper</a>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="whiteSection" style="padding-top: 0px !important">
      <!--promotionWrapper-->
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="sectionTitle" style="margin-bottom: 25px">
              <h2>
                <span>Nuestros viajeros</span>
              </h2>
              <!--<div style="text-align:left; ">
                                Ut facilisis facilisis metus quis semper. Proin convallis magna vel libero accumsan sollicitudin. Ut facilisis facilisis metus quis semper.
                                Vivamus eu mattis nibh. Quisque eget ipsum at odio fringilla consequat vel id erat. Suspendisse non feugiat mi. Integer purus ex, dictum nec elementum eu, tristique vel lectus. Donec rutrum lectus et pharetra egestas.
              </div>-->
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <div class="container">
              <div class="row">
                <div class="col-xs-12">
                  <div class="col-xs-3 no-padding">
                    <a href="/img/home/clientes/clientes1.jpg" rel="gallery-2" class="swipebox">
                      <img
                        class="img-responsive img-thumbnail"
                        src="/img/home/clientes/clientes1.jpg"
                        alt="Cliente contento tras alquilar una furgoneta de Yevana"
                      />
                    </a>
                  </div>
                  <div class="col-xs-3 no-padding">
                    <a href="/img/home/clientes/clientes2.jpg" rel="gallery-2" class="swipebox">
                      <img
                        class="img-responsive img-thumbnail"
                        src="/img/home/clientes/clientes2.jpg"
                        alt="Cliente contento tras alquilar una furgoneta de Yevana"
                      />
                    </a>
                  </div>
                  <div class="col-xs-3 no-padding">
                    <a href="/img/home/clientes/clientes3.jpg" rel="gallery-2" class="swipebox">
                      <img
                        class="img-responsive img-thumbnail"
                        src="/img/home/clientes/clientes3.jpg"
                        alt="Cliente contento tras alquilar una furgoneta de Yevana"
                      />
                    </a>
                  </div>
                  <div class="col-xs-3 no-padding">
                    <a href="/img/home/clientes/clientes4.jpg" rel="gallery-2" class="swipebox">
                      <img
                        class="img-responsive img-thumbnail"
                        src="/img/home/clientes/clientes4.jpg"
                        alt="Cliente contento tras alquilar una furgoneta de Yevana"
                      />
                    </a>
                  </div>
                </div>
                <div style="visibility: hidden; display: none">
                  <a href="/img/home/clientes/clientes5.jpg" rel="gallery-2" class="swipebox">
                    <img
                      class="img-responsive img-thumbnail"
                      src="/img/home/clientes/clientes5.jpg"
                      alt="Cliente contento tras alquilar una furgoneta de Yevana"
                    />
                  </a>
                  <a href="/img/home/clientes/clientes6.jpg" rel="gallery-2" class="swipebox">
                    <img
                      class="img-responsive img-thumbnail"
                      src="/img/home/clientes/clientes6.jpg"
                      alt="Cliente contento tras alquilar una furgoneta de Yevana"
                    />
                  </a>
                  <a href="/img/home/clientes/clientes7.jpg" rel="gallery-2" class="swipebox">
                    <img
                      class="img-responsive img-thumbnail"
                      src="/img/home/clientes/clientes7.jpg"
                      alt="Cliente contento tras alquilar una furgoneta de Yevana"
                    />
                  </a>
                  <a href="/img/home/clientes/clientes8.jpg" rel="gallery-2" class="swipebox">
                    <img
                      class="img-responsive img-thumbnail"
                      src="/img/home/clientes/clientes8.jpg"
                      alt="Cliente contento tras alquilar una furgoneta de Yevana"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="margin-top:15px">
          <div class="col-xs-12">
            <div class="carousel slide" data-ride="carousel" id="quote-carousel">
              <!-- Bottom Carousel Indicators -->
              <!--<ol class="carousel-indicators">
                                <li data-target="#quote-carousel" data-slide-to="0" class="active"></li>
                                <li data-target="#quote-carousel" data-slide-to="1"></li>
                                <li data-target="#quote-carousel" data-slide-to="2"></li>
              </ol>-->
              <!-- Carousel Slides / Quotes -->
              <div class="carousel-inner">
                <!-- Quote 1 -->
                <div class="item active">
                  <blockquote>
                    <div class="row">
                      <div class="col-sm-12">
                        <!--<img src="/img/home/clientes/comillas1.png" style="display: inline-block; margin-top:-10px" width="30" />-->
                        <p
                          style="font-size: 15px !important"
                        >Experiencia de sobresaliente!! Tanto por la furgo, que está cuidada al detalle aprovechando el espacio al máximo, cómo por el trato y la atención recibida por los propietarios, muy profesionales! Hemos disfrutado de ella durante una semana y puedo decir que es muy confortable y manejera. Está bien aislada, por lo que no hemos tenido sensación de frío o calor en ningún momento. Sin duda repetiremos !!"</p>
                        <small>Noelia - Enero 2019</small>
                      </div>
                    </div>
                  </blockquote>
                </div>
                <!-- Quote 2 -->
                <div class="item">
                  <blockquote>
                    <div class="row">
                      <div class="col-sm-12">
                        <p
                          style="font-size: 15px !important"
                        >"Fantástica furgoneta, diseñada teniendo en cuenta cada detalle. No pasamos nada de frío ya que está buen aislada y de motor va perfecta.Los dueños muy agradables, atentos y disponibles en todo momento. Repetiremos seguro!"</p>
                        <small>Noelia - Enero 2019</small>
                      </div>
                    </div>
                  </blockquote>
                </div>
                <!-- Quote 3 -->
                <div class="item">
                  <blockquote>
                    <div class="row">
                      <div class="col-sm-12">
                        <p
                          style="font-size: 15px !important"
                        >"Mi primera escapada en una camper que ha sobrepasado toda expectativa. Un trato muy agradable, cercano, fácil, y en una camper con una estética alucinante y un diseño sobresaliente. Una experiencia que ya estoy deseando repetir. Muchas gracias 😊"</p>
                        <small>Antonio - Marzo 2019</small>
                      </div>
                    </div>
                  </blockquote>
                </div>
                <!-- Quote 4 -->
                <div class="item">
                  <blockquote>
                    <div class="row">
                      <div class="col-sm-12">
                        <p
                          style="font-size: 15px !important"
                        >"Amazing!! We loved everything and had a wonderful time in Andalousia with Alfonso's van. It's just so cool to do a roadtrip with such a great car, it has everything you need. Also Alfonso is very friendly and was always available for us. Strongly recommended!!"</p>
                        <small>Grégoire - Octubre 2018</small>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>

              <!-- Carousel Buttons Next/Prev -->
              <!--<a data-slide="prev" href="#quote-carousel" class="left carousel-control"><i class="fa fa-chevron-left"></i></a>
              <a data-slide="next" href="#quote-carousel" class="right carousel-control"><i class="fa fa-chevron-right"></i></a>-->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MainCarousel from "~/components/home/MainCarousel.vue";
import VehiclesGrid from "~/components/home/VehiclesGrid.vue";
export default {
  components: {
    MainCarousel,
    VehiclesGrid
  }
};
</script>

<style>
.mainContentSection,
.blackSection {
  width: 100%;
  padding: 30px 0 30px 0;
  background-color: black;
  display: block;
}
</style>
