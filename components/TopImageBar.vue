<template>
  <section class="pageTitle" :style="`background-image:url(/img/topImageBar/${image}.jpg);`">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="titleTable">
              <div class="titleTableInner">
                <div class="pageTitleInfo">
                  <h1 v-show="!$device.isMobile">{{title}}</h1>
                  <b>{{text}}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  props: ['image', 'title', 'text']
}
</script>