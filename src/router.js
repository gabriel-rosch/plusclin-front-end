import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import Clinic from './pages/Clinic'
import Medic from './pages/Medic'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/Especialidade/:nameSpecialties', component: Clinic },
        { path: '/MinhaAgenda', component: Medic },
    ]
})