import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5500/'}),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => `todos`,
    }),
  }),
})

export const {useGetTodosQuery} = todosApi

