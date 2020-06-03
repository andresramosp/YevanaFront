<template>
  <footer>
    <!-- <no-ssr >
      <cookie-law theme="dark-lime" buttonText="Acepto!">
      <div slot="message">
        Este sitio web utiliza Cookies, tanto propias como de terceros, para su correcto
funcionamiento, recopilar información estadística sobre su navegación y mostrarle
publicidad relacionada con sus preferencias, generada a partir de sus pautas de
navegación. Si continúa navegando acepta su uso. Para más información pulse consulta la  
        <a href="/docs/Cookies.pdf" target="_blank">política de cookies</a>
      </div>
    </cookie-law>
    </no-ssr> -->
    
    <div class="footer clearfix" style="font-size: 10px !important">
      <div class="container">
        <div class="row">
          <div class="col-sm-3 col-xs-12">
            <div class="footerContent">
              <a href="index.html" class="footer-logo" style="text-align: center">
                <img src="/img/logo.png" alt="footer-logo" width="120" />
              </a>
              <p v-show="!$device.isMobile">
                Alquiler y venta de furgonetas Camper.
                Interiores personalizados con
                el mayor lujo y funcionalidad
                para que disfrutes de la mejor
                experiencia sobre ruedas.
                Todas nuestras vans cuentan
                con la homologación europea
                y con los materiales más vanguardistas
                del mercado. ¿A qué esperas para probarlas?
              </p>
            </div>
          </div>
          <div class="col-sm-3 col-xs-12">
            <div class="footerContent">
              <h5>Contáctanos</h5>
              <p>
                Si tienes alguna duda contacta con nosotros.
                Te ayudaremos a hacer tu sueño realidad.
              </p>
              <ul class="list-unstyled">
                <li>
                  <i class="fa fa-home" aria-hidden="true"></i>C/ Mar del Norte 8, 28830, Madrid
                </li>
                <li>
                  <i class="fa fa-phone" aria-hidden="true"></i>661 713 861 - 616 974 883
                </li>
                <li>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  <a href="mailTo:info@yevana.com">info@yevana.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-3 col-xs-12">
            <div class="footerContent">
              <h5>Sobre el sitio</h5>
              <ul class="list-unstyled" style="line-height: 26px;">
                <li style="margin-bottom: 0px !important">
                  <nuxt-link :to="'/terminos-condiciones'" class="dropdown-toggle">Términos y condiciones</nuxt-link>
                </li>
                <li style="margin-bottom: 0px !important">
                  <nuxt-link :to="'/politica-privacidad'" class="dropdown-toggle">Política de privacidad</nuxt-link>
                </li>
                <li style="margin-bottom: 0px !important">
                    <nuxt-link :to="'/faqs'" class="dropdown-toggle">FAQs alquileres</nuxt-link>
                </li>
                <li style="margin-bottom: 0px !important">
                  <a href="/docs/Cookies.pdf">Política de cookies</a>
                </li>
                <li style="margin-bottom: 0px !important">
                  <nuxt-link :to="'/aviso-legal'" class="dropdown-toggle">Aviso legal</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-3 col-xs-12">
            <div class="footerContent">
              <h5>Redes Sociales</h5>
              <p>
                ¿Quieres saber más sobre nosotros?
                Siguenos y comparte tu experiencia.
              </p>

              <ul class="list-inline" style="margin-top: 30px">
                <li>
                  <a href="https://www.facebook.com/YevanaCAMPER/" target="_blank">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/yevanacamper/?utm_source=ig_profile_share&igshid=1bduig0tl3rn2"
                    target="_blank"
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
      </div>
    </div>
  </footer>
</template>
<script>
  // import CookieLaw from 'vue-cookie-law'
  export default {
    components: {  }
  }
</script>
<style scoped>
.footer {
  line-height: 21px;
}
</style>

