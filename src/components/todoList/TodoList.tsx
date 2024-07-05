import style from './style.module.css'
import TodoItem from "../todoItem/TodoItem.tsx";
import {useEffect, useState} from "react";

const TodoList = () => {

    const [todos, setTodos] = useState([])

    const logTodos = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const date = await response.json()
            setTodos(date)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        logTodos()
    }, [])

    return (
        <div className={style.TodoList}>
            {
                todos.map(({id, title}) => (
                    <TodoItem id={id} title={title}/>
                ))
            }
        </div>
    );
};

export default TodoList;