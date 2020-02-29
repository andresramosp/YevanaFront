<template>
  <header>
    <nav :class="`navbar navbar-default ${opaque ? 'opaque' : ''} navbar-main navbar-fixed-top`" role="navigation">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-ex1-collapse"
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
        <div class="collapse navbar-collapse navbar-ex1-collapse">
          <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown singleDrop active">
                <a href="/">Inicio</a>
              </li>
              <li class="dropdown singleDrop">
                <a href="/alquileres" class="dropdown-toggle">Alquila</a>
              </li>
              <li class="dropdown singleDrop">
                <a href="/contacto" class="dropdown-toggle">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  components: {},
  props: ['opaque'],
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

