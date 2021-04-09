import { App, ComponentCustomProperties } from 'vue';
import * as echarts from 'echarts';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $echarts: typeof echarts;
  }
}

export default {
  install(app: App) {
    Object.assign(app.config.globalProperties, {
      $echarts: echarts
    });
  }
};
