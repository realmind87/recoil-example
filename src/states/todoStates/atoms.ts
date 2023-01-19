import { atom, selector } from 'recoil'
import { TodoTypes } from './types'
import { getTodo } from '@/api/todos'

export const inputState = atom<string>({
    key: 'inputState',
    default: ""
})

export const TodoListState = atom<TodoTypes[]>({
    key: 'TodoListState',
    default: selector({
        key: 'TodoListState/Default',
        get: async () => {
            return await getTodo()
        }
    })
})

export const TodoFilterValue = atom<string>({
    key: 'TodoFilterValue',
    default: "default"
})
