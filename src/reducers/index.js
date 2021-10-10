import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {

    addTask:(state,action)=>{

    }
    
  },
})

// Action creators are generated for each case reducer function
export const {  } = taskSlice.actions

export default taskSlice.reducer