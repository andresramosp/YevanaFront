<template>
  <header>
    <nav class="navbar navbar-default navbar-main navbar-fixed-top" role="navigation">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header" style="padding: 9px">
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
          <img class="logo-menu-home" src="/img/logo.png" style="height: auto">
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse navbar-ex1-collapse">
          <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown singleDrop active">
                <a href="index.html">Inicio</a>
              </li>
              <li class="dropdown singleDrop">
                <a href="/alquileres.html" class="dropdown-toggle">Alquila</a>
              </li>
              <li class="dropdown singleDrop">
                <a href="/contacto.html" class="dropdown-toggle">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<style>
.logo-menu-home {
    width: 150px;
  }
@media (max-width: 767px) {
  .logo-menu-home {
    width: 90px;
    margin-top: 8px;
  }
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

