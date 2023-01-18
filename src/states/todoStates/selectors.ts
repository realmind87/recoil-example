import { selector } from 'recoil'
import { TodoListState, TodoFilterValue } from './atoms'

export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({ get }) => {
        const filterValue = get(TodoFilterValue)
        const todos = get(TodoListState)
        if (filterValue === 'completed'){
            return todos.filter(todo => todo.isCompleted === true)
        } else if (filterValue === 'noComplete'){
            return todos.filter(todo => todo.isCompleted === false)
        } else {
            return todos
        }
    }
})