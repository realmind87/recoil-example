import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { TodoListState } from '@/states/todoStates/atoms' 
import { TodoTypes } from '@/states/todoStates/types'
import TodoItem from '@/components/TodoItem'

const TodoList = () => {
    const [ todos, setTodos ] = useRecoilState<TodoTypes[]>(TodoListState);
    
    const onComplete = useCallback((id: number) => {
        setTodos(prevTodos => {
            return prevTodos.map((todo) => {
                return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            })
        })
    }, [])
    
    const onDelete = useCallback((id: number) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== id)
        })
    }, [])
    
    return (
        <div>
            {todos.map(({id, content, isCompleted}) => {
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