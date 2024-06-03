import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        counter:counterReducer
    }
  })
}