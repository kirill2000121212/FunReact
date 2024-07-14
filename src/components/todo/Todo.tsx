import TodoHeader from "../todoHeader/TodoHeader.tsx";
import style from './style.module.css'
import TodoList from "../todoList/TodoList.tsx";
import SelectTodo from "../selectTodo/SelectTodo.tsx";
import PaginationTodo from "../paginationTodo/PaginationTodo.tsx";
import {useState} from "react";
import {useSortTodosQuery} from "../../store/todosApi.tsx";

const Todo = () => {
    const [page, setPage] = useState(0)
    const pageSize = 2
    const [sort,setSort] = useState('date')

    const {data = [] , isLoading, isError} = useSortTodosQuery(sort)

    console.log(data)

    return (
        <div className={style.TodoWrapper}>
            <TodoHeader/>
            <SelectTodo setSort={setSort}/>
            <TodoList isLoading={isLoading} isError={isError} sortList={data} page={page} pageSize={pageSize}/>
            <PaginationTodo page={page} pageSize={pageSize} setPage={setPage}/>
        </div>
    );
};

export default Todo;