import { configureStore } from '@reduxjs/toolkit'
import  reducer  from '../features/state/stateSlice'

export const store = configureStore({
  reducer: {
    counter : reducer
  },
})