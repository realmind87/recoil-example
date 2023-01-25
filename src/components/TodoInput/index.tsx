import React, { ChangeEvent, useCallback, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { todoListState } from '@/states/todoStates/atoms'
import { TodoTypes } from '@/states/todoStates/types'
import { fetchState } from '@/api'
import { Wrapper, Form, Input, Button } from './styled'
import { AiTwotoneEdit } from 'react-icons/ai'

const TodoInput = () => {
    const [content, setContent] = useState<string>('')
    const { post } = fetchState()
    const onAddTodo = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!content.trim()) return
        post({
            content,
            isCompleted: false
        })
        setContent("")
    }, [content])

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setContent(value)
    }, [])

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