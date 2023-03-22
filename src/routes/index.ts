import ButtonVue from '@components/Button.vue'
import HomePage from '@pages/HomePage.vue'
import CategoryPage from '@pages/CategoryPage.vue'
import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/category/:categoryId',
        name: 'category',
        component: CategoryPage
    },
    {
        path: '/',
        name: 'home',
        component: HomePage
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})