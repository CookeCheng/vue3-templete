import { App, ComponentCustomProperties } from 'vue';
import { AxiosStatic } from 'axios';

declare module '@vue/runtime-core' {
  // interface ComponentCustomProperties {}
}

export default {
  install(app: App, axios: AxiosStatic) {
    // const lotteryRequest: Lottery = new Lottery(axios);
    Object.assign(app.config.globalProperties, {
      // lotteryRequest
    });
  }
};
