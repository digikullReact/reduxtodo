import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

const initialState = {
  value: [],
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {

    addTask:function(state,action){

      state.value.push(action.payload);

    }
    
  },
})

// Action creators are generated for each case reducer function
export const {  addTask} = taskSlice.actions

export default taskSlice.reducer