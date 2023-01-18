import React, { useCallback, useState } from 'react'
import { PropsType, TodoTypes } from '@/states/todoStates/types'
import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    align-items: center;
`
const TodoItem = ({ id, content, isCompleted, onComplete, onDelete, todos, setTodos } : PropsType) => {
    
    const [isModify, setModify] = useState<boolean>(false);
    const [modifyContent, setModifyContent] = useState<string>("")

    const onModifyTodo = useCallback(() => {
        if (!modifyContent.trim()) return
        setTodos(prevTodos => {
            return prevTodos.map((todo: TodoTypes) => {
                return todo.id === id ? { ...todo, content: modifyContent } : todo
            })
        })
        setModify(false)
    }, [id, modifyContent])

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setModifyContent(value)
    }, [])

    return (
        <Box>
            <input type="checkbox" checked={isCompleted} disabled={isModify} onChange={() => onComplete(id)} />
            {!isModify
                ? <p>{content}</p>
                : <input type='text' value={modifyContent} onChange={onChange} />
            }
            <div>
                {!isModify 
                    ? <button onClick={() => setModify(true)} disabled={isCompleted}>수정</button> 
                    : <button onClick={onModifyTodo}>수정</button>
                }
                <button onClick={() => onDelete(id)}>삭제</button>
            </div>
        </Box>
    )
}

export default TodoItem