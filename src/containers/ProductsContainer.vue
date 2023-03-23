<template>
	<div :class="$style.container">
		<ItemProduct
			@click="goToProduct(product)"
			:product="product"
			v-for="product in productsStore.products"
		></ItemProduct>
	</div>
</template>

<script setup lang="ts">
import { useProductsStore } from '@store/ProductsStore'
import { onMounted } from 'vue'
import ItemProduct from '@components/ItemProduct.vue'
import { router } from '@routes/index'
import { IProduct } from '@interfaces/Product.interface'
const productsStore = useProductsStore()
const goToProduct = (product: IProduct) => {
	router.push({
		name: 'product',
		params: {
			id: product.id
		}
	})
}

onMounted(async () => {
	await productsStore.getProducts()
})
</script>

<style lang="scss" module>
.container {
	overflow: hidden;
	padding: 20px;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
}

@media (max-width: 480px) {
}
</style>
