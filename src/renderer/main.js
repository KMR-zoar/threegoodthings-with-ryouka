import Vue from 'vue'

import VCalendar from 'v-calendar'

import App from './App'

Vue.config.productionTip = false

Vue.use(VCalendar, {
  locale: 'ja-JP'
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')
