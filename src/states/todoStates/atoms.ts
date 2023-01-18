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
            isCompleted: false
        },
        {
            id: 2,
            content: 'todo2',
            isCompleted: false
        }
    ]
})