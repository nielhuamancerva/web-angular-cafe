
import { UseList } from "../hooks/useList";




export const CounterTodoItem = () => {
const {pendingTodos} = UseList();
  return (
  <h1>  
     Todos: { pendingTodos}
     </h1>
          );
}
