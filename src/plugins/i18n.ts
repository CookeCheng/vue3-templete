import { createI18n } from 'vue-i18n';
import { App, ComponentCustomProperties } from 'vue';

export default {
  install(app: App) {
    const i18n = createI18n({
      locale: 'ja', // set locale
      fallbackLocale: 'en', // set fallback locale
      messages: {} // set locale messages
    });
    app.use(i18n);
  }
};
