<template>
    <section class="bannercontainer">
      <div class="fullscreenbanner-container">
        <div class="fullscreenbanner">
          <ul>
            <li
              data-transition="parallaxvertical"
              data-slotamount="5"
              data-masterspeed="1000"
              data-title="Slide 1"
            >
              <img
                :src="require('~/assets/Vehiculos/Carrusel/furgoneta_yevana_carrusel_1.jpg')"
                alt="Furgoneta Yevana en el campo"
                data-bgfit="cover"
                data-bgposition="center center"
                data-bgrepeat="no-repeat"
              />
              <div class="slider-caption container">
                <div
                  class="tp-caption rs-caption-1 sft start text-center"
                  data-hoffset="0"
                  data-x="center"
                  data-y="270"
                  data-speed="800"
                  data-start="1000"
                  data-easing="Back.easeInOut"
                  data-endspeed="300"
                >
                  <span style="margin-bottom: 20px">CAMPERVAN HIRE</span>
                  Vive tu experiencia camper
                </div>

                <div
                  class="tp-caption rs-caption-3 sft text-center"
                  data-hoffset="0"
                  data-y="485"
                  data-x="center"
                  data-speed="800"
                  data-start="2000"
                  data-easing="Power4.easeOut"
                  data-endspeed="300"
                  data-endeasing="Power1.easeIn"
                  data-captionhidden="off"
                >
                  <span class="page-scroll" style="margin-right: 20px">
                    <a
                      href="/alquileres.html"
                      class="btn buttonTransparent"
                      style="color: white"
                    >Escapa YA!</a>
                  </span>
                </div>
              </div>
            </li>
            <li
              data-transition="parallaxhorizontal"
              data-slotamount="5"
              data-masterspeed="700"
              data-title="Slide 1"
            >
              <img
                :src="require('~/assets/Vehiculos/Carrusel/furgoneta_yevana_carrusel_2.jpg')"
                alt="Detalle del interior de una furgo de Yevana"
                data-bgfit="cover"
                data-bgposition="center center"
                data-bgrepeat="no-repeat"
              />
              <div class="slider-caption container">
                <div
                  class="tp-caption rs-caption-1 sft start text-right"
                  data-hoffset="0"
                  data-x="center"
                  data-y="270"
                  data-speed="800"
                  data-start="1000"
                  data-easing="Back.easeInOut"
                  data-endspeed="300"
                >
                  <span
                    style="font-size: 22px !important;"
                  >La comodidad de una suite, la libertad de una camper</span>
                  <span>Road Suite</span>
                </div>

                <div
                  class="tp-caption rs-caption-3 sft text-right"
                  data-hoffset="0"
                  data-x="center"
                  data-y="485"
                  data-speed="800"
                  data-start="2000"
                  data-easing="Power4.easeOut"
                  data-endspeed="300"
                  data-endeasing="Power1.easeIn"
                  data-captionhidden="off"
                >
                  <span class="page-scroll">
                    <a
                      href="/alquileres.html"
                      class="btn buttonTransparent"
                      style="color: white"
                    >Alquílala</a>
                  </span>
                </div>
              </div>
            </li>
            <li
              data-transition="parallaxvertical"
              data-slotamount="5"
              data-masterspeed="1000"
              data-title="Slide 2"
            >
              <img
                :src="require('~/assets/Vehiculos/Carrusel/furgoneta_yevana_carrusel_3.jpg')"
                alt="Detalle del interior de una furgo de Yevana"
                data-bgfit="cover"
                data-bgposition="center center"
                data-bgrepeat="no-repeat"
              />
              <div class="slider-caption container">
                <div
                  class="tp-caption rs-caption-1 sft start text-left"
                  data-hoffset="0"
                  data-x="center"
                  data-y="270"
                  data-speed="800"
                  data-start="1000"
                  data-easing="Back.easeInOut"
                  data-endspeed="300"
                >
                  Detalles que marcan la diferencia
                  <span style="margin-top: 0px">Quality & Safe</span>
                </div>

                <div
                  class="tp-caption rs-caption-3 sft text-left"
                  data-hoffset="0"
                  data-x="center"
                  data-y="485"
                  data-speed="800"
                  data-start="2000"
                  data-easing="Power4.easeOut"
                  data-endspeed="300"
                  data-endeasing="Power1.easeIn"
                  data-captionhidden="off"
                >
                  <span class="page-scroll">
                    <a
                      href="/alquileres.html"
                      class="btn buttonTransparent"
                      style="color: white"
                    >Escapa YA!</a>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
</template>

