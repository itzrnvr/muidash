import { createSlice } from "@reduxjs/toolkit";
import { serialize, deserialize } from "react-serialize"

const initialState = {
    event: '',
    actionMenu: []
}

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        executeEvent: (state, {payload}) => {
            state.event = payload
            console.log('Event executed', payload)
        },
        addMenu: (state, action) => {
            console.log(action.payload[0].type)
            const actionMenu = action.payload.map(item => {
                if(item.type == 'IconButton'){
                    serializedIcon = serialize(item.icon)
                    return {
                        ...item,
                        icon: serializedIcon
                    }
                } else {
                    return item
                }
            })
            state.actionMenu = actionMenu
        }
    }
})

const headerReducer = headerSlice.reducer
const headerActions = headerSlice.actions

export {headerReducer, headerActions}