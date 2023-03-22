import axios from "@/core/axios"

const STORE_ID = process.env.STORE_ID
const TOKEN = process.env.TOKEN

export const fetchCategories = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: `${STORE_ID}/categories`,
            headers: {
                Authorization: 'Bearer' +  TOKEN
            }
    
        })
        return response
    } catch (error) {
        console.error(error);
    }
    
}
