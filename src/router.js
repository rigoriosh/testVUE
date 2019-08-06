import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/viewLogin.vue";

Vue.use(Router)

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/form1",
            name: "form1",
            component: () =>
                import ("./views/viewFormulario1.vue")
        },
        {
            path: "/",
            name: "login",
            component: Login
        },
        {
            path: "/mainPage",
            name: "mainPage",
            component: () =>
                import ("./views/viewMainPage.vue")
        },
        {
            path: "/formularios",
            name: "formularios",
            component: () =>
                import ("./views/Formularios.vue")
        },
        {
            path: "/catchData",
            name: "catchData",
            component: () =>
                import ("./views/CatchData.vue")
        },
        {
            path: "/test1",
            name: "testView",
            component: () =>
                import ("./views/tests/test1.vue")
        }
    ]
});