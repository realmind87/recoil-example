import React, { useCallback, useEffect, useState } from 'react'
import { PropsType, TodoTypes } from '@/states/todoStates/types'
import { fetchState } from '@/api'
import { Item, Text, CheckBox, Input, ButtonWrapper, Button } from './styled'
import { FiEdit2 } from 'react-icons/fi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { IoSettingsOutline } from 'react-icons/io5'

const TodoItem = ({ id, content, isCompleted, onComplete, onDelete, todos, setTodos } : PropsType) => {
    
    const [isModify, setModify] = useState<boolean>(false);
    const [modifyContent, setModifyContent] = useState<string>("")
    const { edit } = fetchState()

    const onModify = useCallback((id: number) => {
        const index = todos.findIndex((todo) => todo.id === id)
        setModify(true)
        setModifyContent(todos[index].content)
    }, [todos])

    const onModifyDone = useCallback(() => {
        if (!modifyContent.trim()) return
        edit(id, {content: modifyContent, isCompleted})
        setModify(false)
    }, [id, isCompleted, modifyContent])

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setModifyContent(value)
    }, [])

    return (
        <Item>
            <CheckBox type="checkbox" checked={isCompleted} onChange={() => onComplete(id)} />
            {!isModify
                ? <Text className={isCompleted ? 'on' : ''}>{content}</Text>
                : <Input type='text' className={modifyContent.length === 0 ? "wran" : ""} value={modifyContent} onChange={onChange} />
            }
            <ButtonWrapper>
                {!isModify
                    ? <Button onClick={() => onModify(id)}><FiEdit2 /></Button> 
                    : <Button onClick={onModifyDone}><IoSettingsOutline /></Button>
                }
                <Button onClick={() => onDelete(id)}><RiDeleteBinLine /></Button>
            </ButtonWrapper>
        </Item>
    )
}

export default TodoItem