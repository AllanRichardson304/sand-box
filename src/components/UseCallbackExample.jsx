import React, { useState,useCallback } from "react"
export default function UseCallbackExample() {
    const [tasks , setTask] = useState([])
    const addTask = useCallback(()=> {
        setTask((prevState)=> [...prevState, 'Some Task'])
    },[setTask])

  return (
    <div>
     <Button addTask={addTask}/>
     {tasks.map((task,index)=>(
       <p key={index}>{task}</p>
     )
     )}
    </div>
  )
 
}
const Button = React.memo(({addTask}) =>{
    console.log('Button Rendered')
    return <div>
        <button onClick={addTask}>Add Task</button>
    </div>
  }
)