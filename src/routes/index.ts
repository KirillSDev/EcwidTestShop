import ButtonVue from '@components/Button.vue'
import HomePage from '@pages/HomePage.vue'
import CategoryPage from '@pages/CategoryPage.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DetailPage from '@pages/DetailPage.vue'

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
	},
	{
		path: '/product/:id',
		name: 'product',
		component: DetailPage
	}
]

export const router = createRouter({
	history: createWebHistory(),
	routes
})
