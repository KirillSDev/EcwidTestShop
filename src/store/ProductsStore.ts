import {defineStore} from 'pinia'
import { ref } from 'vue'
import { fetchProducts } from '@api/fetchProducts'
import { IProduct } from '@interfaces/Product.interface'
export const useProductsStore = defineStore('productsStore', () => {
    const products = ref([] as IProduct[])
    const currentProduct = ref(null)
    const status = ref<Boolean>(false)
    const getProducts = async () => {
        await fetchProducts().then(res => {
            products.value = res?.data.items
        })
        status.value = true
    }
    return {
        products,
        status,
        getProducts,
        currentProduct
    }
})