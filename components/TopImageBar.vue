<template>
  <section class="pageTitle" :style="`background-image:url(/img/topImageBar/${image}.jpg);`">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="titleTable">
              <div class="titleTableInner">
                <div class="pageTitleInfo">
                  <h1 v-if="title" style="font-size: 27px; font-weight: 700; margin-bottom: 10px">{{title.toUpperCase()}}</h1>
                  <h2 v-show="!$device.isMobile" style="color: white; font-size: 14px; font-weight: 600" v-html="text"></h2>
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