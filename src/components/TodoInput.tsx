import React, { ChangeEvent, useCallback, KeyboardEvent } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { inputState, TodoListState } from '@/states/todoStates/atoms'
import { TodoTypes } from '@/states/todoStates/types'

const TodoInput = () => {

    const [content, setContent] = useRecoilState<string>(inputState)

    const todos = useRecoilValue<TodoTypes[]>(TodoListState)
    const setTodos = useSetRecoilState<TodoTypes[]>(TodoListState)

    const onAddTodo = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!content.trim()) return
        const id: number = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0
        const isCompleted = false
        const todo: TodoTypes = {
            id,
            content,
            isCompleted
        }
        setTodos([...todos, todo])
        setContent("")
    }, [content])

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setContent(value)
    }, [])

    // const keyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === 'Enter') {
    //         onAddTodo()
    //     }
    // }, [])

    return (
        <form onSubmit={onAddTodo}>
            <input 
                type='text' 
                value={content}
                onChange={onChange} 
            />
            <button>등록</button>
        </form>
    )
}

export default TodoInput