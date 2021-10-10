import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { Input, Button } from 'semantic-ui-react'
import { addTask,setInputState } from '../reducers';



function Add() {
  const dispatch = useDispatch();

  const [state, setstate] = useState("")// local state

  const handleClick=()=>{
    dispatch(addTask(state))  // dispatches the addTaskAction
    

  }

  const handleChange=(event)=>{
    //setstate(event.target.value)
    dispatch(setInputState(event.target.value));

  }
    return (
       
            <div>
              <h1>Add Component</h1>
        <Button content='Add Task'  onClick={handleClick} />
        <Input  placeholder='Your Task Name Goes Here' onChange={handleChange} />
      </div>
            
        
    )
}

export default Add
