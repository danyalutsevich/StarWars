import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Page } from "../types";
import type { Homeworld } from "../types";
import type { Species } from "../types";

export const swapiApi = createApi({
    reducerPath: 'swapiApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
    endpoints: (builder) => ({
        getPage: builder.query<Page, {page: number, searchQuery: string}>({
            query: ({page, searchQuery}) => `people/?page=${page}`,
            transformResponse: (response: Page, meta, arg) => {
                const {searchQuery} = arg
                response.results = response.results.filter((person) => person.name.toLowerCase().includes(searchQuery.toLowerCase()))
                return response
            },
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
        getSpecies: builder.query<Species, string>({
            query: (url) => ({
                url: url,
                baseUrl: "",
            }),
        }),
    })
})

export const { useGetPageQuery, useGetPageByUrlQuery, useGetHomeWorldQuery, useGetSpeciesQuery } = swapiApi
