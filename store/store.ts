import { configureStore } from '@reduxjs/toolkit';
import { swapiApi } from './swapi';
import { starwarsApi } from './starwars_api_for_Images';
import fansSlice from './fansSlice';

export const store = configureStore({
    reducer: {
        "fans": fansSlice.reducer,
        "swapiApi": swapiApi.reducer,
        "starwarsApi": starwarsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(swapiApi.middleware)
    .concat(starwarsApi.middleware),
})