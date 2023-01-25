import { SetterOrUpdater } from 'recoil'

// Todo default types
export type TodoTypes = {
    id?: number;
    content: string;
    isCompleted: boolean;
}

// TodoItem types
export type PropsType = {
    id: number;
    content: string;
    isCompleted: boolean;
    onComplete: (id: number) => void;
    onDelete: (id: number) => void;
    todos: TodoTypes[];
    setTodos: SetterOrUpdater<TodoTypes[]>
}
