import { configureStore } from '@reduxjs/toolkit'
import { Counterslice } from './Slices/CounterSlice'

export const store = configureStore({
  reducer: {
    counter:Counterslice,
  },
})