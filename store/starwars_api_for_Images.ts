import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { StarWarsCharacter } from "@/types";

export const starwarsApi = createApi({
    reducerPath: 'starwarsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/id/' }),
    endpoints: (builder) => ({
        getCharacter: builder.query<StarWarsCharacter, string>({
            query: (url: string) => {
                let tokens = url.split('/')
                let id = tokens[tokens.length - 2]
                return `${id}.json`
            },
        }),
    })
})

export const { useGetCharacterQuery } = starwarsApi
