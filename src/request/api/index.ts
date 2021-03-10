import { App, ComponentCustomProperties } from 'vue';
import { AxiosStatic } from 'axios';
import AppRequest from '@/request/api/App';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    appRequest: AppRequest;
  }
}

export default {
  install(app: App, axios: AxiosStatic) {
    const appRequest: AppRequest = new AppRequest(axios);
    Object.assign(app.config.globalProperties, {
      appRequest
    });
  }
};
