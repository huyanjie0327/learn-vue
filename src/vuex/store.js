import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);


const state = {
    count: 250
};

export default new Vuex.Store({
    state
});
