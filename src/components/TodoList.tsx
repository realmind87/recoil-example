import { useCallback } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { TodoListState } from '@/states/todoStates/atoms'
import { filteredTodoListSelector } from '@/states/todoStates/selectors'
import TodoItem from '@/components/TodoItem'

const TodoList = () => {
    const todos = useRecoilValue(filteredTodoListSelector)
    const setTodos = useSetRecoilState(TodoListState)
    
    const onComplete = useCallback((id: number) => {
        setTodos(prevTodos => {
            return prevTodos.map((todo) => {
                return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            })
        })
    }, [todos])

    const onDelete = useCallback((id: number) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== id)
        })
    }, [todos])

    return (
        <div>
            {todos?.map(({id, content, isCompleted}) => {
                return (
                    <TodoItem 
                        key={id}
                        id={id}
                        content={content}
                        isCompleted={isCompleted}
                        onComplete={onComplete}
                        onDelete={onDelete}
                        todos={todos}
                        setTodos={setTodos}
                    />
                )
            })}
        </div>
    )
}

export default TodoList