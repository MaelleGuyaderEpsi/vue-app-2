import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import infos from './views/infos.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/infos/:name?',
            name: 'infos',
            views: infos
        }
    ]
})