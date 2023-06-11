import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        dialog: {
            addCampaign: {
                isOpen: false
            }
        },
        data: [
            {
                id: 0,
                name: 'First Campaign',
                category: 'HealthInsure',
                date: '20/04/2023 '
            },
            {   
                id: 1,
                name: 'Second Campaign',
                category: 'cosmetics',
                date: '10/04/2023 '
            },
        ]
    }

const openDialog = (state) => {
    state.dialog.addCampaign.isOpen = true
}

const closeDialog = (state) => {
    state.dialog.addCampaign.isOpen = false
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

const addData = (state, {type, payload}) => {
    console.log( 'ADDdATA',payload) 
    console.log('addDATA', type)
    state.data.push({...payload, id: state.data.length})
} 

const campaignSlice = createSlice({
    name: 'campaign',
    initialState,
    reducers: {
        updateAllData: (state, action) => {
             state = action.payload
        },
        updateData,
        deleteData,
        addData,
        openDialog,
        closeDialog
    }
})

const campaignReducer = campaignSlice.reducer
const campaignActions = campaignSlice.actions

export {campaignReducer, campaignActions}