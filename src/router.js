import Vue from 'vue'
import Router from 'vue-router'
import AllSkills from './components/AllSkills.vue'
import About from './components/allAbouts.vue'

Vue.use(Router)


export default new Router({
    routes : [
        {
            path : '/',
            name: 'skills',
            component: AllSkills
        }, 
        {
            path: '/about/:name',
            name: 'about',
            component: About
        }
        
    ]
})