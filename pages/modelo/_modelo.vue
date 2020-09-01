<template>
  <div>
    <section>
      <div class="video-responsive">
        <iframe 
          src="https://player.vimeo.com/video/451771363?autoplay=1&loop=1&autopause=0&muted=1" 
          width="640" 
          height="360" 
          frameborder="0" 
          allow="autoplay; fullscreen"
           allowfullscreen>
        </iframe>
      </div>
    </section>
    <section class="blackSection">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div style="text-align: center">
              <span v-show="!$device.isMobile">
                <nuxt-link to="/contacto">ENCARGA </nuxt-link>TU NUEVA YEVANA DOKKER
              </span>
              <span v-show="$device.isMobile">
                <nuxt-link to="/contacto">ENCARGA </nuxt-link>TU NUEVA YEVANA DOKKER
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="previews-wrap">
      <div v-for="(mosaic, index) in mosaicItems" :key="index">
        <div v-if="!mosaic.backGround" :class="`preview-item ${index % 2 ? 'right-img' : 'false'}`">
          <div
            :class="`preview-item__content ${index > 0 || !$device.isMobile ? 'fadeableFromBottom' : ''}`"
          >
            <h3 v-html="mosaic.title"></h3>
            <p style="margin-top: 5px;">
              <span v-html="mosaic.text"></span>
            </p>
            <div class="icon-list">
              <div class="icon-group" v-for="(icon, index) in mosaic.icons" :key="index">
                <img
                  v-if="icon.id != 'NONE'"
                  :src="require('~/assets/icons/' + icon.id.toLowerCase() +'.png')"
                  :width="$device.isMobile ? 37 : 50"
                  :height="$device.isMobile ? 37 : 50"
                />
                <span v-html="icon.text"></span>
              </div>
            </div>
          </div>
          <img
            :class="`${index % 2 ? 'fadeableFromRight' : 'fadeableFromLeft'}`"
            alt="car"
            :src="`/img/modelos/dokker/00${index + 1}.jpg`"
          />
        </div>

        <div v-else :class="`preview-item item-background ${index % 2 ? 'right-img' : 'false'}`">
          <div class="white-band">
            <div class="square col-md-6 fadeableFromBottom_">
              <h2 v-html="mosaic.title"></h2>
              <p style="margin-top: 15px;">
                <span v-html="mosaic.text"></span>
              </p>
            </div>
            <div class="square col-md-6 fadeableFromBottom_">
              <div class="icon-list">
                <div class="icon-group" v-for="(icon, index) in mosaic.icons" :key="index">
                  <img
                    :src="require('~/assets/icons/' + icon.id.toLowerCase() +'.png')"
                    :width="$device.isMobile ? 32 : 45"
                    :height="$device.isMobile ? 32 : 45"
                  />
                  <span v-html="icon.text"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="white-band">
         <div class="row">
          <div class="col-xs-12">
            <div class="dossier-text">
              <b v-if="!$device.isMobile">SI QUIERES VER TODAS LAS ESPECIFICACIONES TÉCNICAS DETALLADAS, <br /> INCLUSO UN LISTADO DE PRECIOS, PUEDES DESCARGAR EL DOSIER COMPLETO EN PDF</b>
              <b v-else>SI QUIERES VER TODAS LAS ESPECIFICACIONES TÉCNICAS, <br /> DESCARGAR NUESTRO DOSSIER</b>
              <br /><br />
              <div class="col-sm-12">
                  <a :disabled="false" href="" download="/docs/Dossier.WEB.Dokker.Rv3.pdf" class="btn buttonTransparent btn-dossier">
                    DESCARGAR
                  </a>
                </div>
            </div>
          </div>
         </div>
      </div>
      <!-- <div class="video-responsive">
        <iframe 
          src="https://player.vimeo.com/video/453398222?autoplay=0&loop=1&autopause=0&muted=1" 
          width="640" 
          height="360" 
          frameborder="0" 
          allow="autoplay; fullscreen"
           allowfullscreen>
        </iframe>
      </div> -->
    </section>
    <section class="blackSection">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div style="text-align: center">
              <span v-show="!$device.isMobile">
                <nuxt-link to="/contacto">ENCARGA </nuxt-link>TU NUEVA YEVANA DOKKER
              </span>
              <span v-show="$device.isMobile">
                <nuxt-link to="/contacto">ENCARGA YA </nuxt-link>TU NUEVA YEVANA DOKKER
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      modelo: params.modelo,
      mosaicItems: [
  {
    title: "NUESTRA NATURALEZA ES EL CONFORT",
    icons: [
      // { id: "NONE", text: "Portátil 5" },
      // { id: "NONE", text: "50x80 cm" },
      // { id: "NONE", text: "50L" },
      // { id: "NONE", text: "1M" }
    ],
    text:
      "Un viaje tiene muchos aspectos y sabemos que el auténtico viajero quiere disfrutarlos todos al máximo.<br/> <br/> En Yevana somos entusiastas del diseño y la calidad, pero no nos basta con ofrecerte unos acabados exquisitos en todo lo que puedes ver y tocar. Lo que realmente nos llena es la excelencia de lo que no se ve, porque como todos sabemos la verdadera belleza se encuentra en el interior.<br/> <br/> Por eso, presentamos nuestro nuevo modelo Yevana Dokker: <br/><b>un vehículo versátil que se adapta a tu día a día y a todo tipo de viajes.</b><br/> <br/> <br/> <h3>MOTORIZACIONES DISPONIBLES</h3><br/> Essential N1 1.6 Tce 110CV Gasolina-GLP<br/> Essential M1 Blue DCI 1.5 95CV<br/> Stepway Confort M1 Blue DCI 1.5 95CV<br/> <br/><b>TAMBIÉN PUEDES TRAERNOS TU PROPIA DOKKER A CAMPERIZAR</b>"
  },
  {
    title: "EL DESCANSO DE TUS SUEÑOS",
    icons: [
      { id: "cama", text: "Cama<br/> 1.95x1.1m" },
      { id: "madera", text: "Somier 15mm<br/> Abedul" },
      { id: "medidas", text: "Colchoneta<br/> 70mm" },
      { id: "climatizacion", text: "Claraboya<br/> Fiamma" },
      { id: "gas", text: "Autotherm<br/> 2kW" },
      { id: "tv", text: 'TV led 16"<br/> (opcional)' }
    ],
    text:
      "Cama doble plegable de 1.95x1.1m. Somier de madera de abedul de 15mm. Bisagras reforzadas de acero inoxidable.<br/> <br/> Colchoneta ultrafina (70mm) de estilo japonés plegable en 3 piezas, construida con 3 capas de distintas densidades. Bisagras de tejido para evitar la separación de las piezas.<br/> <br/ Tapicería de alta calidad a escoger dentro de nuestro catálogo.<br/> <br/>Claraboya bidireccional de climatización Fiamma Turbovent 160CT de 400x400mm. Velocidad regulable, modo extractor/ventilador y termostato. Mosquitera y oscurecedor.<br/> <br/> Calefacción estacionaria (opcional) a gasoil Autotherm 2kW con programador digital y termostato. TV Led 16” (opcional)."
  },
  {
    title: "ESPACIO PARA TODO TU MUNDO",
    icons: [
      { id: "madera", text: "Chopo<br/> 15mm" },
      { id: "pushlock", text: "Cierres<br/> Push Lock" },
      { id: "bombilla", text: "Led<br/> 3000k" },
      { id: "mesa_exterior_camping", text: "Mesa exterior<br/> 40x65cm" }
    ],
    text:
      "Mobiliario en madera contrachapada de chopo de 15mm (9capas). Laminado HPL. Acabados en 1 o 2 colores a escoger. Iluminación led blanco cálido en todos los compartimentos con encendido y apagado automático. <br/> <br/> Perfilería de aluminio. Cantos semiperfilados. Persianas en PVC con cierre magnético. <br/> <br/> Tiradores en acero inoxidable. Cajones Wurth / Grass Soft Close. Cierres de seguridad Push Lock. Tornillería Inox Wurth. <br/> <br/> Brazos neumáticos de asistencia para apertura de puertas de compartimentos.<br/> <br/> Mesa de exterior plegable de 40x65cm con pata plegable de aluminio anodizado."
  },
  {
    title: "UNA ILUMINACIÓN PARA DESCONECTAR",
    icons: [{ id: "bombilla", text: "Led<br/> 9SMD G4" }],
    text:
      "Iluminación sectorizada y regulable en 3 zonas: exterior lateral, exterior trasero e interior.<br /> <br />  Iluminación general con 4 focos Downligth metálicos de bombillas led 9SMD G4 y tiras led para iluminación difusa, ambas de color blanco cálido.<br /> <br /> Regulador táctil capacitivo de alta sensibilidad.<br /> <br /> Foco de lectura 12 leds SMD5630. 90 lumens de color blanco cálido."
  },
  {
    title: "PENSADA PARA VIAJAR, EQUIPADA PARA TODO",
    icons: [
      { id: "cocina", text: "Butsir<br/> MS1000 PRO" },
      { id: "nevera", text: "Moobicool<br/> FR34 31L" },
      { id: "agua", text: "Depósito<br/> 32L" }
    ],
    text:
      "Cocina portátil a cartuchos de un fuego integrada en módulo lateral Butsir MS1000 pro. Compartimento específico para el gas con capacidad para 8 cartuchos.<br /> <br /> Nevera de compresor de 31L Mobicool FR 34. Temperatura regulable desde -10 a +10. Alimentación 12V DC/ 220V AC. Luz interior y pantalla de control digital.<br /> <br /> Centralita de control de nivel de agua CBE. Depósito de aguas limpias de 32L.<br /> <br /> Fregadero Inox 355x260x150mm y grifo de cartucho cerámico RK Reich.<br /> <br /> Ducha exterior RK Reich con toma rápida. Bomba de agua Reich 2.1 bar-25L/min."
  },
  {
    title: "UN LUGAR DONDE RECARGAR ENERGÍAS",
    icons: [
      { id: "bateria", text: "Batería AGM<br/> 100Ah" },
      { id: "placasolar", text: "Placa solar<br/> 110W" },
      { id: "inversor", text: "Inversor<br/> 600W" }
    ],
    text:
      "Batería AGM de 100Ah. Sistema de carga rápida desde el alternador con convertidor DC-DC (Booster Votronic made in Germany) de 30A.<br /> <br /> Placa solar monocristalina semiflexible de 110W sobre bastidor de aluminio y adaptada a la curvatura del techo. Regulador solar de 10A tecnología PWM.<br /> <br /> Centralita de control NASA MARINE BM1, fabricada en UK (voltímetro-amperímetro con indicación de porcentaje de carga e indicación de tiempo de autonomía y tiempo de recarga completa.<br /> <br /> Inversor de corriente de onda rectificada de 600W CZ con toma USB (1200W pico). 2 tomas dobles USB de 2.1A de encendido táctil. Toma exterior de 230V AC y cargador de baterías de 16A (opcional)."
  },
  {
    title: "ADAPTARSE ES GANAR TERRENO",
    icons: [
      { id: "aislante", text: "Manta latex<br /> 2mm" },
      { id: "medidas", text: "Aislamiento<br /> 10mm" },
      { id: "madera", text: "Suelo 12mm<br /> Abedul" }
    ],
    text:
      "Aislamiento de techo, puertas y zona de cabina de conducción con espuma elastomérica de célula cerrada de 10-20mm según zona.<br /> <br /> Panelado de techo y puertas con friso de pino montero de 10mm de espesor tratado con fungicida, teñido y barnizado al poliuretano por la cara vista (acabados a escoger).<br /> <br /> Manta de latex de 2mm en la cara no vista de todos los paneles de friso para reducir el ruido de impacto y mejorar el asilamiento global.<br /> <br /> Base de suelo construida en abedul fenólico de 12mm. Aislamiento con espuma elastomérica ignífuga de célula cerrada de 10mm y manta de látex de 2mm. Acabado en loseta de vinilo de 4.2mm con Sistema Click (acabados a escoger).<br /> <br /> Toldo exterior tizona (opcional)"
  },
  {
    title: "LA VERSATILIDAD CONVIERTE UNA VERSIÓN EN UN CLÁSICO",
    icons: [
    ],
    text:
      "Hemos diseñado hasta 8 opciones de customización para nuestra <b>Yevana Dokker.</b> Porque no solo se adapta a cualquier viaje, también a cualquier gusto.<br /> <br /> Puedes escoger cualquiera de las personalizaciones sin sobrecoste con la tapicería de serie. Si quieres la tapicería Premium a juego de cada versión contará como un extra."
  },
  {
    title: "LITERALMENTE,<br /> NO HABRÁ OTRA IGUAL",
    backGround: true,
    icons: [
      {
        id: "tv",
        text: "<b>VARIOS</b><br /> TV led. Pack navegación. Asistencia de aparcamiento Calefacción. Toldo exterior bizona. Lunas laminadas de protección solar. Regulador/ limitador velocidad.Toma exterior 230V AC. Cargador de baterías de 16A. Tapicería Premium."
      },
      {
        id: "furgo",
        text:
          "<b>KIT OFF ROAD</b><br /> Suspensión elevada reforzada. Neumáticos Off Road. Protecciones de aluminio. Suspensión elevada reforzada. Protecciones de aluminio."
      },
      {
        id: "furgo",
        text:
          "<b>ACABADO BICOLOR</b>"
      },
      {
        id: "llanta",
        text:
          "<b>LLANTAS DE ALEACIÓN</b>"
      }
    ],
    text:
      "Ofrecemos una amplia variedad de extras para que elijas cada detalle de tu camper.<br /> <br /> Y, además de preparar su interior con instalaciones de luz, agua y habitabilidad, cuenta con la posibilidad de preparación <b>OFF-ROAD: suspensión elevada, neumáticos todoterreno, y protecciones en los bajos.</b><br /> <br /> Para que disfrutes de todos tus viajes sabiendo que los realizas en un vehículo realmente único."
  }
]
    };
  },
  mounted() {
    if (process.client) {
      let video = document.querySelector("#videoModelo");
      if (video)
        video.play();
    }
  },
  created() {
    State.menuOpen = false;
    State.activePage = 'Modelos';
    State.menuOpaque = true;
    State.footerVisible = true;
    State.menuVisible = true;
  },
  head() {
    return {
      title: `YEVANA | Venta de Furgonetas Camper - Diseños exclusivos | Modelo Dacia Dokker Minicamper`,
      meta: [
        {
          hid: "description-furgo",
          name: "description",
          content: "Descubre nuestros modelos de serie. ✅ Furgonetas camper únicas trabajadas a mano. Especialistas en camperizaciones. Interiores personalizados."
        }
      ]
    };
  }
};
</script>

<style>
.blackSection {
  margin-top: -15px;
}
.preview-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-background {
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: url("/img/home/homeParalax.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: black;
}
.item-background p {
  color: black !important;
  font-size: 14px;
}
.item-background .icon-group {
  float: none;
  text-align: left;
  margin-bottom: 10px;
}
.item-background .icon-group span {
  display: inline;
  font-size: 13px;
  margin-left: 20px;
  color: black;
  font-weight: 100;
}
.item-background .square {
  padding-left: 60px;
  padding-right: 60px;
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
  font-size: 14px;
  line-height: 22px;
  width: 80%;
  max-width: 100%;
  padding-right: 0.9375rem;
  color: black;
}
.preview-item__content h3 {
  width: 80%;
  max-width: 100%;
  color: #505d68;
  font-weight: bold;
  font-size: 22px;
  line-height: 1.938rem;
  margin-bottom: 0.9375rem;
}

.preview-item.right-img {
  flex-direction: row-reverse;
}

@media (max-width: 991px) {
  .preview-item {
    display: block;
  }
  .preview-item__content {
    width: 100%;
    /* height: 375px; */
    padding-top: 55px;
    padding-bottom: 55px;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .item-background .square {
    padding-left: 25px !important;
    padding-right: 10px !important;
  }
  .preview-item__content h3 {
    font-size: 20px;
    width: 78%;
  }

  .item-background .icon-list {
    margin-top: 60px;
  }

  .preview-item__content p {
    font-size: 13px;
    width: 100%;
    line-height: 20px;
  }

  .preview-item > img {
    width: 100%;
  }

  .icon-group {
    margin-right: 18px !important;
  }
}

@media (max-width: 767px) {
  .preview-item.right-img {
    flex-direction: column;
  }
  .preview-item {
    flex-flow: column nowrap;
  }
}
.icon-list {
  margin-top: 30px;
}
.icon-group {
  float: left;
  text-align: center;
  margin-right: 28px;
}
.icon-group span {
  display: block;
  margin-top: 4px;
  font-size: 11px;
  margin-left: 3px;
  color: black;
  font-weight: 600;
}
.white-band {
  background-color: rgba(255, 255, 255, 0.65);
  padding-top: 50px;
  width: 100%;
  padding-bottom: 50px;
}
.dossier-text {
 text-align: center;
  padding-left: 80px;
  color: black;
  padding-bottom: 55px;
  padding-top: 30px;
  padding-right: 80px;
  font-size: 17px;
}
.btn-dossier {
  color: white !important; 
  background-color: #ff891e !important; 
  border: none !important
}
</style>
