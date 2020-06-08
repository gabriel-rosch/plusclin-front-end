import Vue from 'vue'
// import Vue from 'vue/dist/vue.js';
import './plugins/vuetify'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Tuex from 'tuex'
// develeoper:
// import firebase from 'firebase'
// product:
// import  firebase from 'firebase/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth'


Vue.config.productionTip = false


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(Tuex);

new Tuex.Store({
    users: [],
    searchSpeciltie: {},
    clinicSelect: {}
});


// eslint-disable-next-line no-unused-vars
let app = new Vue({
    render: h => h(App),
    router,
    components: { App }
}).$mount('#app');

const config = {
    apiKey: "AIzaSyCQCmvbITnSR2bOHpW00lLZb6Wc9Z5rK8A",
    authDomain: "plusclin-833fe.firebaseapp.com",
    databaseURL: "https://plusclin-833fe.firebaseio.com",
    projectId: "plusclin-833fe",
    storageBucket: "plusclin-833fe.appspot.com",
    messagingSenderId: "140772630946",
    appId: "1:140772630946:web:bf93cedfd84710de84d2fb",
    measurementId: "G-ZTZ0ZZ2KZV"
};

// Initialize Firebase
firebase.initializeApp(config);
window.firebase=firebase;

// eslint-disable-next-line no-unused-vars
firebase.auth().onAuthStateChanged((user)=>{});
