<template>
	<div :class="$style.main">
		<CategoriesContainer />
		<ProductsContainer />
		<div
			:class="$style.loading"
			v-if="!(categoriesStore.status && productsStore.status)"
		>
			<Loading />
		</div>
	</div>
</template>

<script setup lang="ts">
import Loading from '@components/Loading.vue'
import CategoriesContainer from '@containers/CategoriesContainer.vue'
import ProductsContainer from '@containers/ProductsContainer.vue'
import { useProductsStore } from '@store/ProductsStore'
import { useCategoriesStore } from '@store/CategoriesStore'
import { ref } from 'vue'
const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()
</script>

<style lang="scss" module>
@import '@scss/colors.scss';
.main {
	background-color: $light;
	overflow: scroll;
	overflow-x: hidden;
	padding: 20px;
	height: calc(100vh - 70px);
}
.loading {
	display: flex;
	justify-content: center;
}
</style>
