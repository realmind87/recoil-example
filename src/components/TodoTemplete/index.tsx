import { Suspense } from 'react'
import TodoInput from "@/components/TodoInput"
import TodoList from "@/components/TodoList"
import TodoFooter from "@/components/TodoFooter"
import { Container } from './styled'

const TodoTemplete = () => {
    return (
        <Container>
            <TodoInput />
            <TodoList />
            <TodoFooter />
        </Container>
    )
}

export default TodoTemplete