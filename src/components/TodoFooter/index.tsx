import React, { useCallback } from 'react'
import { useRecoilState, useSetRecoilState } from "recoil"
import { todoListState, todoFilter } from "@/states/todoStates/atoms"
import { Footer, Select, Button } from './styled'

const TodoFooter = () => {
    const [filter, setFilter] = useRecoilState(todoFilter)
    const setTodos = useSetRecoilState(todoListState)
    const onChangeFilter = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target
        setFilter(value)
    }, [])
    
    const onAllComplete = useCallback(() => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                return {...todo, isCompleted: true}
            })
        })
    }, [])

    const onAllRemoveComplete = useCallback(() => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                return {...todo, isCompleted: false}
            })
        })
    }, [])
    
    const onAllDelete = useCallback(() => {
        setTodos([])
    }, [])

    return (
        <Footer>
            <Select value={filter} onChange={onChangeFilter}>
                <option value="default">Default</option>
                <option value="completed">Completed</option>
                <option value="noComplete">No Complete</option>
            </Select>
            <Button onClick={onAllComplete}>All Complete</Button>
            <Button onClick={onAllRemoveComplete}>All Not Complete</Button>
            <Button onClick={onAllDelete}>All Delete</Button>
        </Footer>
    )
}

export default TodoFooter