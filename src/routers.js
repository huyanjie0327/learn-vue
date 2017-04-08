import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from './components/hello.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/hello',
            name: 'hello',
            component: Hello
        }
    ]
});

export default router;
