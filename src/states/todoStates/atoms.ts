import { atom } from 'recoil'
import { TodoTypes } from './types'

export const inputState = atom<string>({
    key: 'inputState',
    default: ""
})

export const TodoListState = atom<TodoTypes[]>({
    key: 'TodoListState',
    default: []
})

export const TodoFilterValue = atom<string>({
    key: 'TodoFilterValue',
    default: "default"
})
