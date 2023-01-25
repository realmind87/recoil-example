import { TodoTypes } from "@/states/todoStates/types" 
import axios, { AxiosInstance } from 'axios'
import cookies from 'js-cookie';

const SERVER_ADDRESS: string = "http://api.east-zero.com"

axios.defaults.baseURL = SERVER_ADDRESS;
axios.defaults.withCredentials = true;
axios.defaults.headers.access_token = cookies.get('access_token')

export const getTodo = async () => {
    try {
        const response = await axios.get('/todos')
        return response.data
    } catch (error) {
        console.error(error)
    } 
}

export const addTodo = async (data: any) => {
    try {
        const response = await axios.post('/todos', data);
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const editTodo = async (id: any) => {
    try {
        const response = await axios.patch(`/todos/${id}`);
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const deleteTodo = async (id: any) => {
    try {
        const response = await axios.delete(`/todos/${id}`);
        return response.data
    } catch (error) {
        console.error(error)
    }
}