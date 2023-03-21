import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Page } from "../types";

export const swapiApi = createApi({
    reducerPath: 'swapiApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
    endpoints: (builder) => ({
        getPage: builder.query<Page, number>({
            query: (page) => `people/?page=${page}`,
        }),
        getPageByUrl: builder.query<Page, string>({
            query: (url) => url,
        }),
    })
})

export const { useGetPageQuery, useGetPageByUrlQuery } = swapiApi
