import { App } from "vue";
import Scroll from "@/components/Scroll.vue";

export default {
  install(app: App) {
    app.component(Scroll.name, Scroll);
  }
}
