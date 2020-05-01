<template>
  <div class="container">
    <div class="row progress-wizard" style="border-bottom:0;">
      <div :class="`col-sm-4 col-xs-12 progress-wizard-step ${step == 1 ? 'active' : 'disabled'}`">
        <div class="progress">
          <div class="progress-bar"></div>
        </div>
        <a href="javascript:void(0)" class="progress-wizard-dot">
          <i class="fa fa-car" aria-hidden="true"></i>
          1. Configura tu furgoneta
        </a>
      </div>

      <div :class="`col-sm-4 col-xs-12 progress-wizard-step ${step == 2 ? 'active' : 'disabled'}`">
        <div class="progress">
          <div class="progress-bar"></div>
        </div>
        <a href="javascript:void(0)" class="progress-wizard-dot">
          <i class="fa fa-user" aria-hidden="true"></i>
          2. Introduce tus datos
        </a>
      </div>

      <div :class="`col-sm-4 col-xs-12 progress-wizard-step ${step == 3 ? 'active' : 'disabled'}`">
        <div class="progress">
          <div class="progress-bar"></div>
        </div>
        <a href="javascript:void(0)" class="progress-wizard-dot">
          <i class="fa fa-share" aria-hidden="true"></i>
          3. Enviar solicitud
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['step']
  }
</script>
<style scoped>
.container {
  padding-top: 20px;
    /* padding-bottom: 20px; */
}
</style>