import { useNavigate } from "react-router-dom"
import { useState ,useEffect} from "react"
import { useParams } from "react-router-dom"
function Update({tasks,setTasks}) {
    const {id}=useParams()
    const navigate = useNavigate()
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [priority,setPriority]=useState("low")
    const [date,setDate]=useState("")
    const [completed,setCompleted]=useState("no")
 
    useEffect(()=>{
        console.log(id)
        const target=tasks.filter((task)=>task._id===+id)
        setTitle(target[0].title)
        setDescription(target[0].description)
        setPriority(target[0].priority)
        setDate(target[0].date)
        setCompleted(target[0].completed)
      },[])

    const updateHandler = (e)=>{
          e.preventDefault()
          const updateTasks=tasks.map((task)=>task._id===+id?{...task,title,description,priority,date,completed}:task)
          setTasks(updateTasks)
          localStorage.setItem("tasks",JSON.stringify(updateTasks))
  
          navigate("/")
          
    }
    

  return (
    <div className="md:w-[65vw] w-full bg-slate-400 rounded-2xl p-2">
      
      <div className="flex md:w-[65vw] w-full bg-slate-400 p-4 rounded-2xl">
      <form onSubmit={updateHandler} className="flex flex-col w-full gap-y-4">
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
        <button type="submit" className="cursor-pointer bg-green-500 text-white mt-2">Update Task</button>
      </form>
      
    </div>



    </div>
  )
}

export default Update
