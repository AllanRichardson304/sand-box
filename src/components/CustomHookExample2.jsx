import useLocalStorage from "../hooks/useLocalStorage"
export default function CustomHookExample2() {
    const [task,setTask] = useLocalStorage('task','')
    const [tasks,setTasks] = useLocalStorage('tasks',[])
    const onSubmit =  e =>{ 
        e.preventDefault()
        const taskObj = {
            task,
            completed: false,
            date:new Date().toLocaleDateString()
        }
         setTask([...tasks, taskObj])
    }
  return (
    <>
        <form onSubmit={onSubmit}>
      <div>
        <label>Task</label>
        <input type="text" value={task} onChange={(e)=> setTask(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
    <hr />
    {task.map((task)=>(
        <h3 key={task.date}>{task.task}</h3>
    ))}
    </>

  )
}
