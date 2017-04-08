import Vue from 'vue';

import App from './app.vue';
import router from './routers';

const app = new Vue({
  router,
  components: {
      app: App
  }
}).$mount('#app')

// 或者
/*new Vue({
    el: '#app',
    router,
    components: {
        app: App
    }
})*/

