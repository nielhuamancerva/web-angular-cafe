import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { UseList } from "../hooks/useList";
import { Todo } from "../interfaces/interfaceTodo";


interface props {
    todo:Todo
}


export const TodoItem = ({todo}:props) => {
    const {toggleTodo} = UseList()
  return (
    <li style={{
        cursor: 'pointer',
        textDecoration: todo.completed?'line-through' : ''
    }}
     onDoubleClick={()=> toggleTodo(todo.id)}> 
        {todo.desc}
    </li> );
}

