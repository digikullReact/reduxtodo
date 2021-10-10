import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

const initialState = {
  value: [],
  singleTask:"",
  counter:0
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {

    addTask:function(state,action){

     // state.value.push(action.payload);
     // state.counter+=action.payload;
     state.value.push(state.singleTask);

    },
    setInputState:(state,action)=>{
      state.singleTask=action.payload;

    }
    
  },
})

// Action creators are generated for each case reducer function
export const {  addTask,setInputState} = taskSlice.actions

export default taskSlice.reducer