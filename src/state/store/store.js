import { configureStore } from '@reduxjs/toolkit'
import { pathReducer } from '../features/pathSlice'
import { campaignReducer } from '../features/campaignSlice'
import { headerReducer } from '../features/headerSlice'
import { leadsReducer } from '../features/leadSlice'

const store = configureStore({
  reducer: {
    path: pathReducer,
    campaign: campaignReducer,
    leads: leadsReducer,
    header: headerReducer
  },
})

export default store