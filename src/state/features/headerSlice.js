import { createSlice } from "@reduxjs/toolkit";
import { serialize, deserialize } from "react-serialize"

const initialState = {
    topText: {
        title: '',
        subtitle: ''
    },
    event: '',
    actionMenu: []
}

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        updateTopText: (state, {payload}) => {
            state.topText.title = payload.title
            state.topText.subtitle = payload.subtitle
        },
        executeEvent: (state, {payload}) => {
            state.event = payload
            console.log('Event executed', payload)
        },
        addMenu: (state, action) => {
            state.actionMenu = action.payload
        }
    }
})

const headerReducer = headerSlice.reducer
const headerActions = headerSlice.actions

export {headerReducer, headerActions}