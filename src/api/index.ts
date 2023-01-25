import React from 'react'
import axios, { AxiosInstance } from 'axios'
import cookies from 'js-cookie'
import { useRecoilState, useRecoilCallback } from 'recoil'
import { todoListState } from '@/states/todoStates/atoms'

const SERVER_ADDRESS: string = "http://api.east-zero.com"

axios.defaults.baseURL = SERVER_ADDRESS;
axios.defaults.withCredentials = true;
axios.defaults.headers.access_token = cookies.get('access_token')

export type AxiosConfigType = {
    method: string,
    url: string,
    data?: any
}

export const fetch = async ( config : AxiosConfigType ) => {
    try {
        const res = await axios(config)
        return res.data
    } catch (error) {
        console.error(error)
    }
}

export const fetchState = () => {
    
    const [ todos, setTodos ] = useRecoilState(todoListState)

    const get = async () => {
        const config = { method: 'get', url: '/todos' }
        try {
            const response = await fetch(config)
            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    const post = async (data: any) => {
        const config = { method: 'post', url: '/todos', data }
        try {
            const newTodo = await fetch(config)
            setTodos([ ...todos, newTodo ])
        } catch (error) {
            console.error(error)   
        }
    }

    const edit = async (id: number, data: any) => {
        const config = { method: 'patch', url: `/todos/${id}`, data }
        try {
            const updatedTodo = await fetch(config)
            setTodos(updatedTodo)
        } catch (error) {
            console.error(error)
        }
    }

    const del = async (id: number) => {
        const config = { method: 'delete', url: `/todos/${id}` }
        try {
            await fetch(config)
            setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
        } catch (error) {
            console.error(error)
        }
    }

    return { get, post, edit, del }
}
