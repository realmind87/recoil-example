import React, { useCallback } from 'react'
import { useRecoilState, useSetRecoilState } from "recoil"
import { TodoListState, TodoFilterValue } from "@/states/todoStates/atoms"

const TodoFooter = () => {
    const [filter, setFilter] = useRecoilState(TodoFilterValue)
    const setTodos = useSetRecoilState(TodoListState)
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
        <div>
            <select value={filter} onChange={onChangeFilter}>
                <option value="default">Default</option>
                <option value="completed">Completed</option>
                <option value="noComplete">No Complete</option>
            </select>
            <button onClick={onAllComplete}>All Complete</button>
            <button onClick={onAllRemoveComplete}>All Not Complete</button>
            <button onClick={onAllDelete}>All Delete</button>
        </div>
    )
}

export default TodoFooter