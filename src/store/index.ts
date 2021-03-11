import { ComponentCustomProperties } from 'vue';
import { createStore, Store } from 'vuex';
import app from './modules/app';

declare module '@vue/runtime-core' {
  interface State {
    count: number;
  }
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

export default createStore({
  modules: {
    app
  }
});
