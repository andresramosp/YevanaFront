export default {
    mounted() {
        if (process.client) {
          let video = document.querySelector("video");
          window.addEventListener("scroll", (e) => {
            if (this.isScrollIntoView(video, 50)) {
              video.play();
            } else {
              video.pause();
            }
          });
        }
    },
    methods: {
        isScrollIntoView(el, percentVisible) {
          let rect = el.getBoundingClientRect(),
            windowHeight =
              window.innerHeight || document.documentElement.clientHeight;
    
          return !(
            Math.floor(
              100 - ((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100
            ) < percentVisible ||
            Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) <
              percentVisible
          );
        }
      },
};