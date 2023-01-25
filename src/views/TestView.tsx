import React, { useState, useCallback, useEffect, useRef, ChangeEvent } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import { todoTestListState, fetchAPI, dispatcherState } from '@/states/testStates/atoms'
import { fetchState } from '@/api'
import { createDispatcher, Dispatcher } from '@/states/testStates/dispatcher'
import styled from 'styled-components'


const Search = styled.div`
    display: flex;
    padding: 1rem;
`
const Input = styled.input`
    width: 100%;
    height: 30px;
    margin-right: 1rem;
`
const Button = styled.button`
    width: 50px;
    height: 30px;
    border: 1px solid #efefef;
`
const CloseButton = styled.button`
    display: block;
    padding: 1rem;
    border: 1px solid #333;
`
const List = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #efefef;
    padding: 1rem;
    font-size: 1.4rem;
`
const Text = styled.div`
    margin: 0 1rem;
    font-size: 1.4rem;
`
const TestView = () => {
    const [ text, setText ] = useState<string>("")
    const todos = useRecoilValue(todoTestListState)
    const [ dispatch, setDispatch ] = useRecoilState(dispatcherState)

    const dispatchRef = useRef<Dispatcher>(createDispatcher())

    const onChange = useCallback((e : ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setText(value)
    }, [])

    const submitData = () => {
        dispatch?.addItem(text)
    }
    
    const onDelete = (index: number) => {
        dispatch?.deleteItem(index)
    }

    useEffect(() => {
        setDispatch(dispatchRef.current)
    }, [])

    console.log(todos)

    return (
        <div>
            <Search>
                <Input type='text' value={text} onChange={onChange} />
                <Button onClick={submitData}>등록</Button>
            </Search>
            {
                todos.map((todo, index) => {
                    return (
                        <List key={index}>
                            <Text>{index + 1}</Text>
                            <Text>{todo.content}</Text>
                            <CloseButton onClick={() => onDelete(index)}>삭제</CloseButton>
                        </List>
                    )
                })
            }
        </div>
    )
}

export default TestView