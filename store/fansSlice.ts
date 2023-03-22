import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fans: [] as string[],
    maleCount: 0,
    femaleCount: 0,
    otherCount: 0,
}

export const fansSlice = createSlice({
    name: 'fans',
    initialState,
    reducers: {
        addFan: (state, action) => {
            state.fans.push(action.payload.name)
            if (action.payload.gender == "male") {
                state.maleCount++
            }
            else if (action.payload.gender == "female") {
                state.femaleCount++
            }
            else {
                state.otherCount++
            }
        },
        removeFan: (state, action) => {
            state.fans = state.fans.filter(fan => fan !== action.payload)
            if (action.payload.gender == "male") {
                state.maleCount--
            }
            else if (action.payload.gender == "female") {
                state.femaleCount--
            }
            else {
                state.otherCount--
            }
        },
        clearFans: (state) => {
            state.fans = []
            state.maleCount = 0
            state.femaleCount = 0
            state.otherCount = 0
        },
        setFansState: (state, action) => {
            state = action.payload
        },

    },
})



export const { addFan, removeFan, clearFans, setFansState } = fansSlice.actions
export default fansSlice

