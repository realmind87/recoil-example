import TodoInput from "@/components/TodoInput"
import TodoList from "@/components/TodoList"
import TodoFooter from "@/components/TodoFooter"

const Main = () => {
    return (
        <div className="todoContainer">
            <TodoInput />
            <TodoList />
            <TodoFooter />
        </div>
    )
}

export default Main