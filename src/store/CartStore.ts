import { IProduct } from '@interfaces/Product.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useCartStore = defineStore('cartStore', () => {
	const cart = ref([] as IProduct[])
	const getFullPrice = () => {
		return cart.value.reduce((sum: number, item) => {
			return sum + item.price
		}, 0)
	}
	const getCartLength = () => {
		return cart.value.length
	}
	const checkCart = (productId: number) => {
		const foundProduct = cart.value.find((item) => {
			return item.id === productId
		})
		if (!foundProduct) {
			return false
		} else {
			return true
		}
	}
	const addToCart = (product: IProduct) => {
		const foundProduct = cart.value.find((item) => {
			return item.id === product.id
		})
		if (!foundProduct) {
			cart.value.push(product)
		}
	}
	const deleteFromCart = (product: IProduct) => {
		cart.value = cart.value.filter((item) => {
			return item.id !== product.id
		})
	}
	return {
		cart,
		getFullPrice,
		addToCart,
		deleteFromCart,
		getCartLength,
		checkCart
	}
})
