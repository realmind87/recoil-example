import axios from 'axios'

axios.defaults.baseURL = 'http://api.east-zero.com';
axios.defaults.withCredentials = true;

export const getTodo = async () => {
    try {
        const res = await axios.get('/todos')
        return res.data
    } catch (error) {
        console.error(error)
    } 
}