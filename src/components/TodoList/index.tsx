import { useCallback } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { todoListState } from '@/states/todoStates/atoms'
import { filteredTodoListSelector } from '@/states/todoStates/selectors'
import TodoItem from '@/components/TodoItem'
import { fetchState } from "@/api"
import { List, NoData } from './styled'

const TodoList = () => {
    const todos = useRecoilValue(filteredTodoListSelector)
    const setTodos = useSetRecoilState(todoListState)
    const { del } = fetchState()

    const onComplete = useCallback((id: number) => {
        setTodos(prevState => prevState.map((todo)=> todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
    }, [todos])
    
    const onDelete = useCallback((id: number) => {
        del(id)
    }, [])
    
    return (
        <List>
            {todos.length > 0 
                ? todos?.map(({id, content, isCompleted}) => {
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
                })
                : (
                    <NoData>Todo를 입력해 주세요</NoData>
                )

            }
        </List>
    )
}

export default TodoList