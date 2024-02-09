import { useContext , createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {    
            id : 1,
            todo: "Todo msg",
            completed: false
        }
    ] ,
    addTodo : (todo) => {},
    updateTodo: (todo , id) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext) /* custom hook for the use of the context that we use in the app */
}

export const TodoProvider =  TodoContext.Provider

