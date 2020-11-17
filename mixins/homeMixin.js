export default {
    mounted() {
        if (process.client) {
          let video = document.querySelector(".autoPlay");
          let dynComponents = document.querySelectorAll(".loadWithScroll");
          let fadeableFromBottom = document.querySelectorAll(".fadeableFromBottom");
          let fadeableFromLeft = document.querySelectorAll(".fadeableFromLeft");
          let fadeableFromRight = document.querySelectorAll(".fadeableFromRight");
          window.addEventListener("scroll", (e) => {
            for (let dynComp of dynComponents) {
              if (this.isScrollIntoView(dynComp, -10)) {
                this[dynComp.id + 'Visible'] = true;
              }
            }
            if (video) {
              if (this.isScrollIntoView(video, 50)) {
                video.play();
              } else {
                video.pause();
              }
            }
            for (var fadEl of fadeableFromBottom) {
              if (this.isScrollIntoView(fadEl, 1)) {
                fadEl.classList.add('animationFromBottom');
              } 
            }
            for (var fadEl of fadeableFromLeft) {
              if (this.isScrollIntoView(fadEl, 1)) {
                fadEl.classList.add('animationFromLeft');
              } 
            }
            for (var fadEl of fadeableFromRight) {
              if (this.isScrollIntoView(fadEl, 1)) {
                fadEl.classList.add('animationFromRight');
              } 
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