import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Page } from "@/types";
import type { Homeworld } from "@/types";

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
        getHomeWorld: builder.query<Homeworld, string>({
            query: (url) => ({
                url: url,
                baseUrl: "",
            }),

        }),
    })
})

export const { useGetPageQuery, useGetPageByUrlQuery, useGetHomeWorldQuery } = swapiApi
