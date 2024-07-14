import {Pagination} from "antd";
import {useGetTodosQuery} from "../../store/todosApi.tsx";
import {FC} from "react";
import {TYPE_PAGINATION} from "./type.ts";

const PaginationTodo : FC<TYPE_PAGINATION> = ({pageSize, page, setPage}) => {
    const totalData = {
        limit: 0,
        offset: 0
    }
    const {data = []} = useGetTodosQuery(totalData)
    const total = data.length

    return (
        <>
            <Pagination
                align='center'
                total={total}
                current={page}
                pageSize={pageSize}
                onChange={page => setPage(page)}
            />
        </>
    );
};

export default PaginationTodo;