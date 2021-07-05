import { createApp, App as AppHost, ComponentCustomProperties } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import axios, { AxiosStatic } from 'axios';

import i18n from '@/plugins/i18n';

import lodash from '@/plugins/lodash';

import utils from '@/utils/index';

// import elementui from '@/plugins/elementui';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import echarts from '@/plugins/echarts';

import commonComponets from '@/components/index';

import Interceptors from '@/request/interceptors';

import request from '@/request/api/index';

import directives from '@/extend/directives';

import '@/assets/scss/main.scss';

const app: AppHost = createApp(App);

app.use(i18n);

app.use(lodash);
app.use(utils);

app.use(ElementPlus);

app.use(echarts);

app.use(commonComponets);

app.use(Interceptors, axios);

app.use(request, axios);

app.use(directives);

app.use(store).use(router);

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosStatic;
  }
}

app.config.globalProperties.$axios = axios;

app.mount('#app');
