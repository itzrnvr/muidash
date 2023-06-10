import { configureStore } from '@reduxjs/toolkit'
import { pathReducer } from '../features/pathSlice'

const store = configureStore({
  reducer: {
    path: pathReducer
  },
})

export default store