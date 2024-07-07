import TodoHeader from "../todoHeader/TodoHeader.tsx";
import style from './style.module.css'
import TodoList from "../todoList/TodoList.tsx";

const Todo = () => {
    return (
        <div className={style.TodoWrapper}>
            <TodoHeader/>
            <TodoList/>
        </div>
    );
};

export default Todo;