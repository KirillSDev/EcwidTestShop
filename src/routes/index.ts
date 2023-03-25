import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NotFoundPage from '@pages/NotFoundPage.vue'
import HomePage from '@pages/HomePage.vue'
const DetailPage = () => import('@pages/DetailPage.vue')
const CartPageVue = () => import('@pages/CartPage.vue')
const CategoryPage = () => import('@pages/CategoryPage.vue')

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
	},
	{
		path: '/cart',
		name: 'cart',
		component: CartPageVue
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundPage
	}
]

export const router = createRouter({
	history: createWebHistory(),
	routes
})
