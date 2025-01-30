import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
function AddTask({tasks,setTasks}) {
 
  
  const navigate = useNavigate()
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [priority,setPriority]=useState("low")
  const [date,setDate]=useState("")
  const [completed,setCompleted]=useState("no")
  const [_id,setID]= useState(tasks.length>0?tasks[tasks.length-1]._id+1:1)
  
  const submitHandler = (e)=>{
        e.preventDefault()
        const taskID= _id
        setTasks((prev)=> [...prev,{_id:taskID,title,description,priority,date,completed}])
        setID((pre)=> pre+1)

        navigate("/")
        
  }
  useEffect(()=>{
   localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])
  

  return (
    <div className="flex w-[65vw] bg-slate-400 p-4 rounded-2xl">
      <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4">
        <label htmlFor="">Title</label>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter Title " className="p-1 border outline-none" />
        <label htmlFor="">Description</label>
        <input value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter Description here" className="p-1 border outline-none"/>
        <label htmlFor="">Priority</label>
        <select value={priority} onChange={(e)=>setPriority(e.target.value)} name="" id="" className="p-1 border outline-none">
          <option value="low">Low</option>
          <option value="med">Med</option>
          <option value="high">High</option>
        </select>
        <label htmlFor="">Date</label>
        <input value={date} onChange={(e)=>setDate(e.target.value)} type="date" className="p-1 border outline-none"/>
        <label htmlFor="">Completed</label>
        <select value={completed} onChange={(e)=>setCompleted(e.target.value)} name="completed" id="completed" className="p-1 border outline-none">
          <option value="no">no</option>
          <option value="yes">yes</option>
        </select>
        <button type="submit" className="cursor-pointer bg-green-500 text-white mt-2">Create Task</button>
      </form>
      
    </div>
  )
}

export default AddTask
