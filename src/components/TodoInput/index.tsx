import React, { ChangeEvent, useCallback } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { inputState, TodoListState } from '@/states/todoStates/atoms'
import { TodoTypes } from '@/states/todoStates/types'
import { Wrapper, Form, Input, Button } from './styled'
import { AiTwotoneEdit } from 'react-icons/ai'

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
        <Wrapper>
            <Form onSubmit={onAddTodo}>
                <Input
                    type='text' 
                    value={content}
                    onChange={onChange} 
                />
                <Button><AiTwotoneEdit /></Button>
            </Form>
        </Wrapper>
    )
}

export default TodoInput