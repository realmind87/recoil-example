import { atom, selector } from 'recoil'
import { TodoTypes } from './types'
import { fetch } from '@/api'

export const todoListState = atom<TodoTypes[]>({
    key: 'todoListState',
    default: selector<TodoTypes[]>({
        key: 'todoListState/selector',
        get: async () => {
            return await fetch({method: 'get', url: '/todos'})
        }
    })
})

export const todoFilter = atom<string>({
    key: 'todoFilter',
    default: "default"
})
