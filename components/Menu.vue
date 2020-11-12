<template>
  <header>
    <nav
      :class="`navbar navbar-default ${opaque ? 'opaque' : ''} navbar-main navbar-fixed-top`"
      role="navigation"
    >
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" @click="toggleMenu()">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <nuxt-link :to="'/'">
            <img class="logo-menu-home" src="/img/logo.png" style="height: auto" alt="Logo de Yevana" />
          </nuxt-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div :class="`collapse navbar-collapse navbar-ex1-collapse ${State.menuOpen ? 'in' : ''}`">
          <div
            :class="`collapse navbar-collapse navbar-ex1-collapse ${State.menuOpen ? 'in' : ''}`"
          >
            <ul class="nav navbar-nav navbar-right">
              <!-- <li :class="`dropdown singleDrop ${activePage == 'Inicio' ? 'active' : ''}`">
                <nuxt-link :to="'/'">Yevana</nuxt-link>
              </li> -->
              <li :class="`dropdown singleDrop ${activePage == 'Alquila' ? 'active' : ''}`">
                <nuxt-link :to="'/alquiler-campers'" class="dropdown-toggle">Alquila</nuxt-link>
              </li>
              <li :class="`dropdown singleDrop ${activePage == 'Modelos' ? 'active' : ''}`">
                <a href="/modelo/dokker" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Modelos</a>
                <ul class="dropdown-menu dropdown-menu-left">
                  <li class=""><nuxt-link :to="'/modelo/dokker'" class="dropdown-toggle">Yevana Dokker</nuxt-link></li>
                </ul>
              </li>
              <li :class="`dropdown singleDrop ${activePage == 'Faqs' ? 'active' : ''}`">
                <nuxt-link :to="'/faqs'" class="dropdown-toggle">Faqs</nuxt-link>
              </li>
              <li :class="`dropdown singleDrop ${activePage == 'Blog' ? 'active' : ''}`">
                <nuxt-link :to="'/blog'" class="dropdown-toggle">Blog</nuxt-link>
              </li>
              <li :class="`dropdown singleDrop ${activePage == 'Contacto' ? 'active' : ''}`">
                <nuxt-link :to="'/contacto'" class="dropdown-toggle">Contacto</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import State from "~/services/state";
export default {
  data() {
    return {
      State
    };
  },
  components: {},
  props: ["opaque", "activePage"],
  mounted() {
    var header = $(".changeHeader .navbar-fixed-top");
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 1 && $(".navbar-default").hasClass("navbar-main")) {
        header.addClass("lightHeader");
      } else if ($(".navbar-default").hasClass("static-light")) {
        header.addClass("lightHeader");
      } else {
        header.removeClass("lightHeader");
      }
    });
      $('.dropdown').hover(function() {
        $(this).addClass('open');
      },
      function() {
        $(this).removeClass('open');
      });
  },
  methods: {
    toggleMenu() {
      State.menuOpen = !State.menuOpen;
    }
  }
};
</script>
<style>
.navbar-header {
  padding: 14px;
}
.logo-menu-home {
  width: 120px;
}
.desktop .logo-menu-home-separator {
  width: 170px;
}
.mobile .logo-menu-home-separator {
  width: 120px;
}
@media (max-width: 767px) {
  .logo-menu-home {
    width: 90px;
    margin-top: 8px;
  }
  .navbar-header {
    padding: 5px;
  }
}
.opaque {
  background-color: black !important;
}
.navbar-default .navbar-collapse {
  border-color: black;
}
.navbar-collapse {
  border-top: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.dropdown-menu {
  background-color: black !important;
}
</style>

