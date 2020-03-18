import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import Clinic from './pages/Clinic'
import Doctor from "./pages/Doctor";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/:nameSpecialties', component: Clinic },
        { path: '/:nameSpecialties/:nameClinic', component: Doctor },
    ]
})
