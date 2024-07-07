import style from './style.module.css'
import TodoItem from "../todoItem/TodoItem.tsx";
import {useGetTodosQuery} from "../../store/todosApi.js";

const TodoList = () => {
    const {data = [],isLoading} = useGetTodosQuery()

    const deleteTodo = (valueId) => {
        return data.filter(({id}) => {
            return valueId !== id
        })
    }

    return (
        <div className={style.TodoList}>
            {
                isLoading ? <h1 className={style.isLoadingText}>Грузится...</h1> :
                data.map(({id, title}) => (
                    <TodoItem
                        key={id}
                        id={id}
                        title={title}
                        deleteTodo={() => data(deleteTodo(id))}
                    />
                ))
            }
        </div>
    );
};

export default TodoList;