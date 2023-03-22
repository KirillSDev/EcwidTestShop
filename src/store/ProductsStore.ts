import {defineStore} from 'pinia'
import { ref } from 'vue'
import { fetchProducts } from '@api/fetchProducts'
export const useProductsStore = defineStore('productsStore', () => {
    const products = ref([])
    const currentProduct = ref(null)
    const status = ref<Boolean>(false)
    const getProducts = async () => {
        await fetchProducts().then(res => {
            products.value = res?.data.items
        })
    }
    return {
        products,
        status,
        getProducts,
        currentProduct
    }
})