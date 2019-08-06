import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import * as firebase from "firebase";
import VueFirebase from "vue-firebase";
import './registerServiceWorker'

console.log("enstoy en App");


//Nota: ejecutar npm install --save firebase 

Vue.config.productionTip = false;
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
//var firebase = require("firebase/app")

// Add the Firebase products that you want to use
//require("firebase/auth");
//require("firebase/database");
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDBCenXEoXwMWQky-1wE0dIF1VrOokWTk4",
    authDomain: "icbf-fase-ii.firebaseapp.com",
    databaseURL: "https://icbf-fase-ii.firebaseio.com",
    projectId: "icbf-fase-ii",
    storageBucket: "",
    messagingSenderId: "643561417136",
    appId: "1:643561417136:web:6e1feacdbc93c4ea"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')