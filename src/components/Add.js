import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { Input, Button } from 'semantic-ui-react'
import { addTask } from '../reducers';



function Add() {
  const dispatch = useDispatch();

  const [state, setstate] = useState("")

  const handleClick=()=>{
    dispatch(addTask(state))

  }

  const handleChange=(event)=>{
    setstate(event.target.value)

  }
    return (
       
            <div>
        <Button content='Add Task'   onClick={handleClick} />
        <Input  placeholder='Your Task Name Goes Here' onChange={handleChange} />
      </div>
            
        
    )
}

export default Add
