import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todo, TodoState } from "../interfaces/interfaceTodo";

export const UseList = () => {
    const {todoState,toggleTodo} = useContext(TodoContext)
    const {todos} = todoState
  return {
    todos:todos,
    pendingTodos:todos.filter(todo => !todo.completed).length,
    toggleTodo
  };
}