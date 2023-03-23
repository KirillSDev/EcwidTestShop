import { IProduct } from '@interfaces/Product.interface'
import { useCartStore } from '@store/CartStore'
import { computed } from 'vue'

const cartStore = useCartStore()

export const getStatus = (props: { product: IProduct }) => {
	return computed(() => {
		return cartStore.checkCart(props.product.id) ? 'Удалить...' : 'Купить'
	})
}

export const checkInCart = (product: IProduct) => {
	const foundProduct = cartStore.checkCart(product.id)
	if (foundProduct) {
		cartStore.deleteFromCart(product)
	} else {
		cartStore.addToCart(product)
	}
}
