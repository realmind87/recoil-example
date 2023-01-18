import { useCallback, useState } from 'react'
import { PropsType, TodoTypes } from '@/states/todoStates/types'
import styled from 'styled-components';

const Box = styled.div`
    display: flex;
`
const TodoItem = ({ id, content, isCompleted, onComplete, onDelete, todos, setTodos } : PropsType) => {
    
    const [isModal, setModal] = useState<boolean>(false);
    const [modifyContent, setModifyContent] = useState<string>("")
    
    const onModify = useCallback(() => {
        setModal(true)
        setModifyContent(content)
    }, [content])

    const onModifyTodo = useCallback(() => {
        if (!modifyContent.trim()) return
        setTodos(prevTodos => {
            return prevTodos.map((todo: TodoTypes) => {
                return todo.id === id ? { ...todo, content: modifyContent } : todo
            })
        })
        setModal(false)
    }, [id, modifyContent])

    return (
        <Box>
            <input type="checkbox" onChange={() => onComplete(id)} />
            <p>{content}</p>
            <button onClick={onModify}>수정</button>
            <button onClick={() => onDelete(id)}>삭제</button>
        </Box>
    )
}

export default TodoItem