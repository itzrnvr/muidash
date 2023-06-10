import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    path: "/campaign"
}

const pathSlice = createSlice({
    name: 'path',
    initialState,
    reducers: {
        updatePath: (state, action) => {
             state.path = action.payload
        }
    }
})

const pathReducer = pathSlice.reducer
const pathActions = pathSlice.actions

export {pathReducer, pathActions}