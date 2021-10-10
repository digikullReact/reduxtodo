import React from 'react'
import { useDispatch } from 'react-redux'
import { Input, Button } from 'semantic-ui-react'
import { addTask } from '../reducers';



function Add() {
  const dispatch = useDispatch();

  const handleClick=()=>{
    dispatch(addTask("Anythinng"))

  }
    return (
       
            <div>
        <Button content='Add Task'   onClick={handleClick} />
        <Input  placeholder='Your Task Name Goes Here' />
      </div>
            
        
    )
}

export default Add
