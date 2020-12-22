<template>
  <section class="mainContentSection" style="background-color: #f0f9f2">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="sectionTitle">
            <h2>
              <span style="background-color: #f0f9f2">TU CENTRO INTEGRAL DE CAMPERS EN MADRID</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="row aboutItem" style="margin-top: 15px">
        <div class="col-sm-3 col-xs-12">
          <div class="media text-center">
            <a href="#"
              ><img
                class="lazyload"
                width="120"
                alt="energia verde"
                :data-src="require('~/assets/home/services/energia-verde.png')"
              />
            </a>
            <div class="media-body">
              <h4 class="media-heading">Campers Sostenibles</h4>
              <p>
                Alimentadas por energía verde mediante placa solar. Autónomas. Usamos tapicería de cuero sintético “sin sufrimiento animal”
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-xs-12">
          <div class="media text-center">
            <img
              class="lazyload"
              width="120"
              alt="atencion 24h"
              :data-src="require('~/assets/home/services/atencion.png')"
            />
            <div class="media-body">
              <h4 class="media-heading">Atención 24 horas</h4>
              <p>
                Atención 24 horas: Alquila tu furgoneta camper y viaja con total
                tranquilidad. Trato personalizado las 24 horas al día.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-xs-12">
          <div class="media text-center">
            <a href="#"
              ><img
                class="lazyload"
                width="120"
                alt="mascotas permitidas"
                :data-src="require('~/assets/home/services/mascotas.png')"
              />
            </a>
            <div class="media-body text-center">
              <h4 class="media-heading">Pet Friendly</h4>
              <p>
                ¿Perro o gato? Sí... tu mascota también puede viajar en la
                camper contigo, y totalmente GRATIS.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-xs-12">
          <div class="media text-center">
            <a href="#"
              ><img
                class="lazyload"
                width="120"
                alt="limpieza ozono"
                :data-src="require('~/assets/home/services/limpieza.png')"
              />
            </a>
            <div class="media-body">
              <h4 class="media-heading">Limpieza con Ozono</h4>
              <p>
                Todas nuestras furgonetas son desinfectadas con ozono. Elimina
                malos olores, bacterías, virus y hongos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row aboutItem" :style="`margin-top: ${!$device.isMobile ? 15 : 0}px`">
        <div class="col-sm-3 col-xs-12">
          <div class="media text-center">
            <a href="#"
              ><img
                class="lazyload"
                width="120"
                alt="ventajas"
                :data-src="require('~/assets/home/services/camper-van.png')"
              />
            </a>
            <div class="media-body">
              <h4 class="media-heading">Ventajas</h4>
              <p>
                Prueba tu camper alquilando con nosotros y te descontamos el
                importe de tu alquiler del precio de venta.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-xs-12">
          <div class="media text-center">
            <a href="#"
              ><img
                class="lazyload"
                width="120"
                alt="diseño e ingenieria"
                :data-src="require('~/assets/home/services/prototipo.png')"
              />
            </a>
            <div class="media-body">
              <h4 class="media-heading">Engineering Van Art</h4>
              <p>
                Fusionamos ingeniería y arte para ofrecerte las mejores camper
                del mercado. Echas a mano con los materiales más vanguardistas.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-xs-12">
          <div class="media text-center">
            <a href="#"
              ><img
                width="120"
                class="lazyload"
                alt="garantía de yevana"
                :data-src="
                  require('~/assets/home/services/control-de-calidad.png')
                "
              />
            </a>
            <div class="media-body">
              <h4 class="media-heading">Garantía Yevana</h4>
              <p>
                Furgonetas camper totalmente equipadas con materiales de calidad. Además ofrecemos garantía post venta de 1 año.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-xs-12">
          <div class="media text-center">
            <a href="#"
              ><img
                width="120"
                class="lazyload"
                alt="tratamiento personalizado"
                :data-src="require('~/assets/home/services/recomendacion.png')"
              />
            </a>
            <div class="media-body">
              <h4 class="media-heading">Tratamiento Personalizado</h4>
              <p>
                Estudiamos la camper que mejor se adapta a tus necesidades, te asesoramos y te acompañamos durante todo el proceso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.media-body {
  padding-top: 15px;
}
</style>