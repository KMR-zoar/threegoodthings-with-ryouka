import Vue from 'vue'

import VCalendar from 'v-calendar'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'

Vue.config.productionTip = false

Vue.use(VCalendar, {
  locale: 'ja-JP'
})

Vue.use(ElementUI, {locale})

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')
