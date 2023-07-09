import { useReducer } from "react"
import { TodoState } from "../interfaces/interfaceTodo"
import { TodoContext } from "./TodoContext"
import { todoReducer } from "./TodoReducer"

const INITIAL_STATE:TodoState = {
    todoCount: 2,
    todos: [
        {id:'1',
        desc: 'Recolectar las priedras',
        completed:false},{
        id:'2',
        desc: 'las priedras',
        completed:false
        }
    ],
    completed: 0,
    pending: 2
}

interface props {
    children: JSX.Element | JSX.Element[]
}



export const TodoProvider = ({children}:props) => {
    const [todoState,dispatch] = useReducer(todoReducer,INITIAL_STATE);
    const toggleTodo = (id:string) => dispatch({type:'toggleTodo',payload:{id}})
    return (
            <TodoContext.Provider value={
                {toggleTodo,
                todoState}}>
                {children}
            </TodoContext.Provider>
    )
}