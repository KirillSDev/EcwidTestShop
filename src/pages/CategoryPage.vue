<template>
	<div :class="$style.main">
		<ItemProduct
			:product="product"
			v-for="product in productsStore.productsByCategory"
		/>
	</div>
</template>

<script setup lang="ts">
import ItemProduct from '@components/ItemProduct.vue'
import { useProductsStore } from '@store/ProductsStore'
import { useCategoriesStore } from '@store/CategoriesStore'

const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()
</script>

<style lang="scss" module>
@import '@scss/colors.scss';
.main {
	height: calc(100% - 70px);
	display: grid;
	overflow: scroll;
	overflow-x: hidden;
	padding: 20px;
	justify-content: center;
	gap: 20px;
	grid-template-columns: repeat(3, auto);
	background-color: $light;
}
</style>
