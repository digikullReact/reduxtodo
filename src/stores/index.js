import { configureStore } from '@reduxjs/toolkit'
import taskSlice from "../reducers"

export const store = configureStore({
  reducer: {
      tasks:taskSlice
  },
})