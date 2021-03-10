import { App } from "vue";
export default {
  install(app: App) {
    const {
      filterNumber,
      filterSpecial,
      Drag
    } = app.config.globalProperties.$utils;

    app.directive("focus", {
      mounted(el: any, binding: any) {
        const vm = binding.instance;
        el.focus();
      }
    });

    app.directive("filterSpecial", {
      mounted(el: any) {
        el.handler = () => {
          el.value = filterSpecial(el.value);
        };
        el.addEventListener("input", el.handler, false);
      },
      unmounted(el: any) {
        el.removeEventListener("input", el.handler, false);
      }
    });

    app.directive("number", {
      // v-number.positive.decimals2
      /*       this.$utils.filterNumber(e.target.value, {
        modifiers: {
          decimals2: true,
          positive: true
        }
      }) */
      mounted(el: any, binding: any) {
        el.handler = () => {
          el.value = filterNumber(el.value, binding);
        };
        el.addEventListener("input", el.handler, false);
      },
      unmounted(el: any) {
        el.removeEventListener("input", el.handler, false);
      }
    });

    let drag: any = null;
    app.directive("drag", {
      mounted(el: any) {
        el.classList.add("drag");
        drag = new Drag({ el });
      },
      updated(el: any) {
        el.classList.add("drag");
      },
      unmounted() {
        drag.destory();
      }
    });
  }
};
