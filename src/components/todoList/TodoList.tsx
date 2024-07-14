import style from './style.module.css'
import TodoItem from "../todoItem/TodoItem.tsx";
import {useDeleteTodosMutation, useGetTodosQuery} from "../../store/todosApi.tsx";
import {FC} from "react";
import {TYPE_TODO_PAGE} from './type.ts'

const TodoList : FC<TYPE_TODO_PAGE> = ({pageSize, page,sortList,isError,isLoading}) => {
    const listPaginationValue = {
        limit: pageSize,
        offset: page
    }

    const {data} = useGetTodosQuery(listPaginationValue)
    const [deleteTodos] = useDeleteTodosMutation()

    return (
        <div className={style.TodoList}>
            {
                isError && <h1>Ошибка!</h1>
            }
            {
                isLoading ? <h1 className={style.isLoadingText}>Грузится...</h1> :
                    sortList?.map(({id, title, date}) => (
                        <TodoItem
                            key={id}
                            title={title}
                            date={date}
                            deleteTodo={() => deleteTodos(id)}
                        />
                    ))
            }
        </div>
    );
};

export default TodoList;