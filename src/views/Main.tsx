import TodoInput from "@/components/TodoInput"
import TodoList from "@/components/TodoList"

const Main = () => {
    return (
        <div className="todoContainer">
            <TodoInput />
            <TodoList />
        </div>
    )
}

export default Main