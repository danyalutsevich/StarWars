import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    fans: []
}

export const fansSlice = createSlice({
    name: 'fans',
    initialState,
    reducers: {
        addFan: (state, action) => {
            state.fans.push(action.payload)
        },
        removeFan: (state, action) => {
            state.fans = state.fans.filter(fan => fan !== action.payload)
        }
    },
})

export const { addFan, removeFan } = fansSlice.actions
export default fansSlice

