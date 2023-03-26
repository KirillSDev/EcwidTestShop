<template>
	<BaseLayout>
		<CategoriesContainer v-show="categoriesStore.status" />
		<ProductsContainer
			v-show="productsStore.status"
			:products="productsStore.products"
			style="margin-top: 10px"
		/>
		<Loading
			v-if="!(productsStore.status && categoriesStore.status)"
			:class="$style.loading"
		/>
	</BaseLayout>
</template>

<script setup lang="ts">
import Loading from '@components/Loading.vue'
import { useProductsStore } from '@store/ProductsStore'
import { useCategoriesStore } from '@store/CategoriesStore'
import ProductsContainer from '@containers/ProductsContainer.vue'
import CategoriesContainer from '@containers/CategoriesContainer.vue'
import BaseLayout from '@layouts/BaseLayout.vue'
const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()
</script>

<style lang="scss" module>
.loading {
	margin-top: 20px;
	display: flex;
	justify-content: center;
}
</style>
