import Vue from 'vue'
import './plugins/vuetify'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Tuex from 'tuex'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(Tuex);

new Tuex.Store({
    users: [],
    searchSpeciltie: {},
    clinicSelect: {}
});
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')