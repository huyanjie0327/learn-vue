import Vue from 'vue';

import App from './app.vue';
import router from './routers';
import store from './vuex/store.js';

const app = new Vue({
  store,
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

