import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import Clinic from './pages/Clinic'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/especialidade/:nameSpecialties', component: Clinic },
    ]
})