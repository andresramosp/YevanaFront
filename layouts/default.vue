<template>
  <div :class="`main-wrapper ${$device.isMobile ? 'mobile' : 'desktop'}`">
    <Menu
      v-show="State.menuVisible"
      :class="State.menuOpaque ? 'menu-opaque' : ''"
      :opaque="State.menuOpaque"
      :activePage="State.activePage"
    />
    <nuxt />
    <Footer v-show="State.footerVisible" />
  </div>
</template>
<script>
import Menu from "~/components/Menu.vue";
import Footer from "~/components/Footer.vue";
import State from "~/services/state";
export default {
  components: {
    Menu,
    Footer
  },
  data() {
    return {
      State
    };
  },
};
</script>
<style>
.video-responsive {
    height: 0;
    overflow: hidden;
    padding-bottom: 56.25%;
    /* padding-top: 30px; */
    position: relative;
    }
.video-responsive iframe, .video-responsive object, .video-responsive embed {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    }
.menu-opaque {
  margin-bottom: 72px !important;
}
.notices .toast .toast-text {
  color: white;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #ff891e;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}
.nav-tabs .nav-link {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.nav-link {
  display: block;
  padding: 5px;
}
.mobile .card .nav > li > a {
  padding: 10px 6px 13px 6px;
  font-size: 12px;
}
.card .nav > li > a {
  position: relative;
  display: block;
  color: #969696;
}
.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}
.card-header {
  padding: 7px 7px 0px 7px;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 20px;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.vc-rounded-full {
  border-radius: none !important;
}
.vc-highlight {
  /* width: 100% !important;
    height: 100% !important; */
}
.modal-vue-panel {
  padding: 10px;
}
.blackSection {
  width: 100%;
  padding: 30px 0 30px 0;
  background-color: black;
  display: block;
  position: relative;
  z-index: 10;
  color: white;
  font-size: 25px;
}
.mobile .blackSection {
  padding: 10px 0 10px 0;
  font-size: 11px;
}

.fadeableFromBottom {
  opacity: 0.0;
  margin-top: 300px;
}

.animationFromBottom {
  animation-name: textOutFromBottom;
  animation-duration: 4.5s; 
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-delay: 0.35s;
  animation-play-state: normal;
  animation-direction: normal;
  animation-fill-mode: forwards;
}
@keyframes textOutFromBottom {
0% {
  margin-top: 300px;
  opacity: 0.0;
}
25% {
  margin-top: 0px;
  opacity: 0.7;
}
80% {
  margin-top: 0px;
  opacity: 0.9;
}
100% {
  opacity: 1;
  margin-top: 0px;
}
}

.fadeableFromLeft {
  margin-right: -500px;
  opacity: 0.3;
}

.animationFromLeft {
  animation-name: textOutFromLeft;
  animation-duration: 1.0s; 
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-delay: 0s;
  animation-play-state: normal;
  animation-direction: normal;
  animation-fill-mode: forwards;
}
@keyframes textOutFromLeft {
0% {
  margin-right: -500px;
  opacity: 0.3;
}
100% {
  margin-right: 0px;
  opacity: 1;
}
}

.fadeableFromRight {
  margin-left: -500px;
  opacity: 0.3;
}

.animationFromRight {
  animation-name: textOutFromRight;
  animation-duration: 1.0s; 
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-delay: 0s;
  animation-play-state: normal;
  animation-direction: normal;
  animation-fill-mode: forwards;
}
@keyframes textOutFromRight {
0% {
  margin-left: -500px;
  opacity: 0.3;
}
100% {
  margin-left: 0px;
  opacity: 1;
}
}
</style>


