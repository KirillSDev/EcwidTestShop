<template>
	<div :class="$style.container">
		<ItemCategory
			@click="goToCategory(category.id)"
			v-for="category in categoriesStore.categories"
			:category="category"
		/>
		<div :class="$style.loading" v-if="!categoriesStore.status">
			<Loading />
		</div>
	</div>
</template>

<script setup lang="ts">
import { useCategoriesStore } from '@store/CategoriesStore'
import { onMounted } from 'vue'
import ItemCategory from '@components/ItemCategory.vue'
import Loading from '@components/Loading.vue'
import { router } from '@routes/index'

const categoriesStore = useCategoriesStore()

onMounted(async () => {
	await categoriesStore.getCategories()
})

const goToCategory = (id: number) => {
	router.push({
		name: 'category',
		params: {
			categoryId: id
		}
	})
}
</script>

<style lang="scss" module>
.container {
	margin: 0px auto;
	padding: 20px;
	display: grid;
	max-width: fit-content;
	gap: 20px;
	grid-template-columns: repeat(2, auto);
}

@media (max-width: 480px) {
	.container {
		grid-template-columns: repeat(1, auto);
	}
}
</style>
