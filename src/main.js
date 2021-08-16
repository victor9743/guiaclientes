import Vue from 'vue'
// importação da App.vue
import App from './App.vue'
// import hello from './hello_wolrd'

import "../node_modules/bulma/css/bulma.css"

Vue.config.productionTip = false

/* cria um novo objeto vue, renderizando por parametro o App
  da página Vue.js. Por fim, o $mount, faz renderizar a página
  app, para dentro da id="app" que está na index
*/

new Vue({
  render: h => h(App),
}).$mount('#app')
