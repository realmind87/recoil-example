import { atom } from 'recoil'
import { TodoTypes } from './types'

export const inputState = atom<string>({
    key: 'inputState',
    default: ""
})

export const TodoListState = atom<TodoTypes[]>({
    key: 'TodoListState',
    default: [
        {
            id: 1,
            content: 'todo1',
            isCompleted: true
        },
        {
            id: 2,
            content: 'todo2',
            isCompleted: false
        }
    ]
})

export const TodoFilterValue = atom<string>({
    key: 'TodoFilterValue',
    default: "default"
})
