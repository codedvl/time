import Vue from 'vue';
import Vuex from 'vuex';

export default () => {
    Vue.use(Vuex);
    const TIME_STORE = new Vuex.Store({});
    return TIME_STORE;
};