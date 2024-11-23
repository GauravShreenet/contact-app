import axios from 'axios'

const apiEndPoint = import.meta.env.VITE_ROOT_API
const userAPI = apiEndPoint + "/users"

export const fetchUsers = async () => {
    try {
        const { data } = await axios.get(userAPI)
        return data
    } catch (error) {
        console.error("Error fetching users:", error)
        throw error
    }
}