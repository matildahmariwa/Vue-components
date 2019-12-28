
import Vue from 'vue'

import App from './App.vue'


Vue.config.productionTip = false

Vue.component('my-component', {
template:'<div>This is a test</div>'
})


new Vue({
  render: h => h(App),

}).$mount('#app')
