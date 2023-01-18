import { selector } from 'recoil'
import { TodoTypes } from '@/states/todoStates/types'
import { getTodoList } from '@/api/todos'
import { TodoListState, TodoFilterValue } from './atoms'

export const todoListSelector = selector<TodoTypes[]>({
    key: "todoListSelector",
    get: async () => {
        return await getTodoList()
    }
})

export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({ get }) => {
        const filterValue = get(TodoFilterValue)
        const todos = get(todoListSelector)
        if (filterValue === 'completed'){
            return todos.filter(todo => todo.isCompleted === true)
        } else if (filterValue === 'noComplete'){
            return todos.filter(todo => todo.isCompleted === false)
        } else {
            return todos
        }
    }
})