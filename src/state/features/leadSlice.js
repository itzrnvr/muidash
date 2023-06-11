import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        dialog: {
            addLead: {
                isOpen: false
            }
        },
        selectedData: [],
        data: []
    }


const setSelectedData = (state, {payload}) => {
    state.selectedData = payload
}

const openDialog = (state) => {
    state.dialog.addLead.isOpen = true
}

const closeDialog = (state) => {
    state.dialog.addLead.isOpen = false
}

const updateData = (state, {type, payload}) => {
    console.log(payload)
    state.data = state.data.map(item => item.id == payload.id ? {...item, ...payload}: item)
}

const deleteData = (state, {type, payload}) => {
    console.log('jj', payload)
    const ids = payload.map(item => item.id)
    state.data = state.data.filter(item => !ids.includes(item.id))
}

const addData = (state, {payload}) => {
    console.log( 'ADDdATA',payload) 
    state.data.push({id: state.data.length, ...payload})
} 

const leadsSlice = createSlice({
    name: 'leads',
    initialState,
    reducers: {
        setData: (state, {payload}) => {
             state.data = payload
        },
        updateData,
        deleteData,
        addData,
        openDialog,
        closeDialog,
        setSelectedData
    }
})

const leadsReducer = leadsSlice.reducer
const leadsActions = leadsSlice.actions

export {leadsReducer, leadsActions}