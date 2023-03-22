import { defineStore } from "pinia";
import { fetchCategories } from "@api/fetchCategories";
import { ref } from "vue";
export const useCategoriesStore = defineStore('categoriesStore', () => {
    const categories = ref([])
    const status = ref(false)
    const getCategories = async () => {
        const response = await fetchCategories()
        const data = await response?.data?.items
        categories.value = data
        status.value = true
    }
    return {
        categories,
        status,
        getCategories
    }
})