import { Suspense } from 'react'
import TodoInput from "@/components/TodoInput"
import TodoList from "@/components/TodoList"
import TodoFooter from "@/components/TodoFooter"

const Main = () => {
    return (
        <div className="todoContainer">
            <TodoInput />
            <Suspense fallback={<div>...Loading</div>}>
                <TodoList />
            </Suspense>
            <TodoFooter />
        </div>
    )
}

export default Main