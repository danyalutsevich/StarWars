import { configureStore } from '@reduxjs/toolkit';
import { swapiApi } from './swapi';
import fansSlice from './fans';

export const store = configureStore({
    reducer: {
        "fans" : fansSlice.reducer,
        "swapiApi": swapiApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swapiApi.middleware),
})
