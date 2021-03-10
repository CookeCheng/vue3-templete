<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Scroll",
  props: {
    bounce: {
      type: [Boolean, Object],
      default: false
    },
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    data: {
      type: [Array, Object, Number, String, Boolean],
      default: null
    },
    beforeScroll: {
      type: Boolean,
      default: false
    },
    refreshDelay: {
      type: Number,
      default: 500
    },
    scrollX: {
      type: Boolean,
      default: false
    },
    scrollbar: {
      type: [Object, Boolean],
      default() {
        return {
          fade: false,
          interactive: true
        };
      }
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  // emits: ["scroll", "pullingUpEnd", "pullingDownEnd", "beforeScroll"],
  mounted() {
    this.init();
  },
  methods: {
    init() {
      setTimeout(() => {
        if (
          this.$refs.wrapper &&
          this.$refs.wrapper.firstElementChild &&
          this.$refs.wrapper.offsetHeight <
            this.$refs.wrapper.firstElementChild.offsetHeight
        ) {
          this._initScroll();
        }
      }, this.refreshDelay);
    },
    _initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300
        },
        scrollX: this.scrollX,
        bounce: this.bounce
          ? this.bounce
          : {
              top: false,
              bottom: false,
              left: false,
              right: false
            },
        scrollbar: this.scrollbar
      });

      // if (this.listenScroll) {
      //   this.scroll.on("scroll", pos => {
      //     this.$emit("scroll", pos);
      //   });
      // }

      // if (this.beforeScroll) {
      //   this.scroll.on("beforeScrollStart", () => {
      //     this.$emit("beforeScroll");
      //   });
      // }

      if (document.querySelector(".bscroll-vertical-scrollbar")) {
        document.querySelector(".bscroll-vertical-scrollbar").style.zIndex =
          "999";
      }
    },
    disable() {
      this.scroll && this.scroll.disable();
    },
    enable() {
      this.scroll && this.scroll.enable();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    destroy() {
      this.scroll && this.scroll.destroy();
    },
    scrollTo() {
      // eslint-disable-next-line prefer-spread,prefer-rest-params
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement() {
      // eslint-disable-next-line prefer-spread,prefer-rest-params
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    finishPullDown() {
      this.scroll && this.scroll.finishPullDown();
    },
    resizeScrollDetetion() {
      setTimeout(() => {
        if (this.scroll) {
          this.refresh();
        } else {
          this._initScroll();
        }
      }, this.refreshDelay);
    }
  },
  watch: {
    data(v) {
      if (!this.scrollX) {
        setTimeout(() => {
          if (
            this.$refs.wrapper &&
            this.$refs.wrapper.firstElementChild &&
            this.$refs.wrapper.offsetHeight >=
              this.$refs.wrapper.firstElementChild.offsetHeight
          ) {
            if (this.scroll) {
              this.scroll.scrollTo(0, 0);
              setTimeout(() => {
                this.destroy();
                this.scroll = null;
              }, 20);
            }
          } else {
            if (this.scroll) {
              this.refresh();
            } else {
              this._initScroll();
            }
          }
        }, this.refreshDelay);
      } else {
        setTimeout(() => {
          if (
            this.$refs.wrapper.offsetWidth >=
            this.$refs.wrapper.firstChild.offsetWidth
          ) {
            this.destroy();
            this.scroll = null;
          } else {
            if (this.scroll) {
              this.refresh();
            } else {
              this._initScroll();
            }
          }
        }, this.refreshDelay);
      }
    }
  }
});
</script>
<style scoped lang="scss"></style>
