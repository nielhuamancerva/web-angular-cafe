import { createContext } from "react";
import { TodoState } from "../interfaces/interfaceTodo";

export type TodoContextPros = {
    todoState: TodoState,
    toggleTodo:(id:string) =>void
}

export const TodoContext = createContext<TodoContextPros>({} as TodoContextPros);