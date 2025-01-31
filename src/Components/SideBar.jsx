import { useMemo, useState } from "react"

function SideBar({tasks}) {
  const completedTask=useMemo(()=>{
    const completedTask= tasks.filter((item)=>item.completed==="yes")
    return completedTask.length
  },[tasks])

  const pendingTask =useMemo(()=>{
       const pending=tasks.filter((item)=>item.completed==="no")
       return pending.length
  },[tasks])

  const totalTasks = useMemo(()=>{
   return tasks.length
  },[tasks])
  return (
    <div className="p-3 flex flex-col items-center ">
      <p className="text-lg font-bold ">User Profile</p>

      <div className="grid ">
        <p className="text-2xl font-bold">Total Tasks</p>
       <p className="font-bold bg-slate-600 text-white p-2"> {totalTasks}</p>
        <p className="text-2xl font-bold">Completed</p>
       <p className="font-bold bg-slate-600 text-white p-2"> {completedTask}</p>
        <p className="text-2xl font-bold">Pending</p>
       <p className="font-bold bg-slate-600 text-white p-2"> {pendingTask}</p>

      </div>
      
    </div>
  )
}

export default SideBar
