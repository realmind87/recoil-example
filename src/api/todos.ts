import { TodoTypes } from '@/states/todoStates/types'
import axios from 'axios'

// const todos = [
//     {id: 0, content: 'todo1', isCompleted: false}
// ]

// export const getTodoList = (): Promise<TodoTypes[]> => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(todos), 5000)
//     })
// }

axios.defaults.baseURL = 'http://api.east-zero.com';
axios.defaults.withCredentials = true;

export const getTodoList = async () => {
    try {
        const res = await axios.get('/todos')
        return res.data
    } catch (error) {
        console.error(error)
    } 
}