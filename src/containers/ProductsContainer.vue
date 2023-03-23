<template>
	<div :class="$style.container">
		<ItemProduct
			:product="product"
			v-for="product in productsStore.products"
		></ItemProduct>
		<div :class="$style.loading" v-if="!productsStore.status">
			<Loading />
		</div>
	</div>
</template>

<script setup lang="ts">
import { useProductsStore } from '@store/ProductsStore'
import { onMounted } from 'vue'
import ItemProduct from '@components/ItemProduct.vue'
import Loading from '@components/Loading.vue'

const productsStore = useProductsStore()

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
