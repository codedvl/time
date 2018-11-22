import Vue from 'vue';
import Vuex from 'vuex';

export default () => {
    Vue.use(Vuex);
    const TIME_STORE = new Vuex.Store({
        state: {
            isAuthenticated: false,
        },
        mutations: {
            setAuthenticationState(state, isAuthenticated) {
                state.isAuthenticated = isAuthenticated;
            }
        },
        getters: {
            getAuthenticationState: (state) => () => {
                return state.isAuthenticated; 
            }
        },
    });
    return TIME_STORE;
};