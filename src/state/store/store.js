import { configureStore } from '@reduxjs/toolkit'
import { pathReducer } from '../features/pathSlice'
import { campaignReducer } from '../features/campaignSlice'
import { headerReducer } from '../features/headerSlice'

const store = configureStore({
  reducer: {
    path: pathReducer,
    campaign: campaignReducer,
    header: headerReducer
  },
})

export default store