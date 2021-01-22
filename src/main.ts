import { createApp } from 'vue'
import { createGtm } from 'vue-gtm'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


const gtmConfig = {
  id: process.env.VUE_APP_GTM_KEY,
  enabled: process.env.NODE_ENV === 'production',
  debug: false,
  vueRouter: router,
}

const i18nConfig = {
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: require('@/i18n/en.json'),
  }
}

createApp(App)
  .use(store)
  .use(router)
  .use(createGtm(gtmConfig))
  .use(createI18n(i18nConfig))
  .mount('#app')
