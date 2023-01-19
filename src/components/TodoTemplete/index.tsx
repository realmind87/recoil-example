import { Suspense } from 'react'
import TodoInput from "@/components/TodoInput"
import TodoList from "@/components/TodoList"
import TodoFooter from "@/components/TodoFooter"
import { Container } from './styled'

const TodoTemplete = () => {
    return (
        <Container>
            <TodoInput />
            <Suspense fallback={<div>...Loading</div>}>
                <TodoList />
            </Suspense>
            <TodoFooter />
        </Container>
    )
}

export default TodoTemplete