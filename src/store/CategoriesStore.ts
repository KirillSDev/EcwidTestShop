import { defineStore } from 'pinia'
import { fetchCategories } from '@api/fetchCategories'
import { ref } from 'vue'
import { ICategory } from '@interfaces/Category.interface'

export const useCategoriesStore = defineStore('categoriesStore', () => {
	const categories = ref([] as ICategory[])
	const currentCategory = ref({} as ICategory)
	const status = ref(false)
	const setCurrentCategory = (category: ICategory) => {
		currentCategory.value = category
	}
	const getCategories = async () => {
		const response = await fetchCategories()
		const data = await response?.data?.items
		categories.value = data
		status.value = true
	}
	return {
		categories,
		status,
		getCategories,
		setCurrentCategory
	}
})
