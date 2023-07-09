
import { UseList } from "../hooks/useList";
import { TodoState } from "../interfaces/interfaceTodo";
import { TodoItem } from "./TodoItem";

export type TodoContextPros = {
    todoState: TodoState
}

export const TodoList = () => {
    const {todos} = UseList()

  return (
    <ul>
        {todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
    </ul> );
}

