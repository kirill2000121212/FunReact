import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {TYPE_TODO_LIST, TYPE_TODO_PAGINATION} from "./type.ts";

export const todosApi = createApi({
    reducerPath: 'todosApi',
    tagTypes: ['Todos'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5500'}),
    endpoints: (builder) => ({
        getTodos: builder.query<TYPE_TODO_LIST[],TYPE_TODO_PAGINATION>({
            query: ({limit, offset}) => `/todos?limit=${limit}&offset=${offset}`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({id}) => ({type: 'Todos', id})),
                        {type: 'Todos', id: 'LIST'},
                    ]
                    : [{type: 'Todos', id: 'LIST'}]
        }),
        deleteTodos: builder.mutation({
            query: (id) => ({
                url: `/todo/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{type: 'Todos', id: 'LIST'}]
        }),
        createTodo: builder.mutation({
            query: ({id, title, date}) => ({
                url: `/todo`,
                method: 'POST',
                body: {
                    id,
                    title,
                    date
                }
            }),
            invalidatesTags: [{type: 'Todos', id: 'LIST'}]
        }),
        sortTodos: builder.query({
            query: (querySelector) => `/todos?sort=${querySelector}`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({id}) => ({type: 'Todos', id})),
                        {type: 'Todos', id: 'LIST'},
                    ]
                    : [{type: 'Todos', id: 'LIST'}]
        }),
    }),
})

export const {
    useGetTodosQuery,
    useDeleteTodosMutation,
    useCreateTodoMutation,
    useSortTodosQuery
} = todosApi

