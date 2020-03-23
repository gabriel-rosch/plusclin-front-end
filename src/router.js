import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import Clinic from './pages/Clinic'
import Schedule from './pages/Schedule'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/especialidade/:nameSpecialties', component: Clinic },
        { path: '/minhaAgenda', component: Schedule },
    ]
})
