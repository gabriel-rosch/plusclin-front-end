import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import Clinic from './pages/Clinic'
import Schedule from './pages/Schedule'
//import Medic from './pages/Medic';
import Doctor from "./pages/Doctor";
import Teste from "./pages/Teste";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '*', component: Home},
        {path: '/especialidade/:nameSpecialties', component: Clinic},
        {path: '/minhaAgenda', component: Schedule},
        {path: '/especialidade/:nameSpecialties/:clinicId/:dataSelected', component: Doctor},
        {path: '/teste', component: Teste}
    ]
})
