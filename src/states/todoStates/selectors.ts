import { selector } from 'recoil'
import { todoListState, todoFilter } from './atoms'

export const filteredTodoListSelector = selector({
    key: 'filteredTodoListState',
    get: ({ get }) => {
        const key = get(todoFilter)
        const todos = get(todoListState)
        if (key === 'completed'){
            return todos.filter(todo => todo.isCompleted === true)
        } else if (key === 'noComplete'){
            return todos.filter(todo => todo.isCompleted === false)
        } else {
            return todos
        }
    }
})