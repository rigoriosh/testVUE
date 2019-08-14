import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        mainPage: true,
        logIn: true,
        db: null,
        remoteCouch: false,
        usuarioCache: null,
        user: null
    },
    mutations: {},
    actions: {}
});

console.log(8888);