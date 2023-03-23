<template>
	<div :class="$style.container">
		<ItemCategory
			@click="goToCategory(category)"
			v-for="category in categoriesStore.categories"
			:category="category"
		/>
	</div>
</template>

<script setup lang="ts">
import { useCategoriesStore } from '@store/CategoriesStore'
import { onMounted } from 'vue'
import ItemCategory from '@components/ItemCategory.vue'
import { router } from '@routes/index'
import { ICategory } from '@interfaces/Category.interface'

const categoriesStore = useCategoriesStore()

onMounted(async () => {
	await categoriesStore.getCategories()
})

const goToCategory = (category: ICategory) => {
	categoriesStore.setCategoryById(category.id)
	router.push({
		name: 'category',
		params: {
			categoryId: category.id
		}
	})
}
</script>

<style lang="scss" module>
.container {
	margin: 0px auto;
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
