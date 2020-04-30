<template>
  <header>
    <nav
      :class="`navbar navbar-default ${opaque ? 'opaque' : ''} navbar-main navbar-fixed-top`"
      role="navigation"
    >
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            @click="toggleMenu()"
           
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!-- <a class="navbar-brand" href="index.html"></a> -->
          <a href="/">
            <img class="logo-menu-home" src="/img/logo.png" style="height: auto" />
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div :class="`collapse navbar-collapse navbar-ex1-collapse ${State.menuOpen ? 'in' : ''}`">
          <div :class="`collapse navbar-collapse navbar-ex1-collapse ${State.menuOpen ? 'in' : ''}`">
            <ul class="nav navbar-nav navbar-right">
              <li :class="`dropdown singleDrop ${activePage == 'Inicio' ? 'active' : ''}`">
                <nuxt-link :to="'/'">Inicio</nuxt-link>
              </li>
              <li :class="`dropdown singleDrop ${activePage == 'Alquila' ? 'active' : ''}`">
                <nuxt-link :to="'/alquileres'" class="dropdown-toggle">Alquila</nuxt-link>
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
    }
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
  background-color: black;
}
.navbar-default .navbar-collapse {
  border-color: black;
}
.navbar-collapse {
  border-top: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>

