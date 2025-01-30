import { Link } from "react-router-dom";
import { FaFlag } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosCloudDone } from "react-icons/io";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Tasks({ tasks, setTasks }) {
  const navigate= useNavigate()
  const deleteTask=(id)=>{
    const remainingTask= tasks.filter((task)=>task._id!==+id)
    setTasks(Array.isArray(remainingTask)?remainingTask:[])

  }
  useEffect(()=>{
   localStorage.setItem("tasks",JSON.stringify(tasks))  
  },[tasks])

  const editTask=(id)=>{
    navigate(`/update/${id}`)

  }
  return (
    <div className="border rounded-2xl w-[65vw] bg-slate-400 p-4">
      <p className="flex justify-center">
        Tasks
      </p>
      {/* --------------------------Tasks------------------ */}

      <div className="grid grid-cols-3 gap-x-2 gap-y-10">
      {tasks.map((task,index) => {
        return (
          <div
            key={index}
            className="w-70 h-60 p-2 flex rounded-2xl flex-col justify-between border  bg-slate-300 "
          >
            <div>
              {/* -------------------Date------------ */}
              <div className="flex justify-center">
                <p>{task.date}</p>
              </div>
              {/* --------------title-description---------------- */}
              <div className="flex flex-col">
                <p className="text-2xl font-bold">{task.title}</p>
                <p className="text-sm ">{task.description}</p>
              </div>
              {/* ------------------------ */}
            </div>

            {/* ------------------ */}

            {/* ---------------------------------- */}
            <div className="flex justify-between">
              <p className={`${task.priority==="low"?"text-green-600":task.priority==="med"?"text-amber-400":"text-red-600"}`}> 
                  <FaFlag/>
                  </p>
              <p onClick={()=>editTask(task._id)} className="cursor-pointer" ><FaEdit/></p>
              <p onClick={()=>deleteTask(task._id)} className="text-red-600 cursor-pointer"><MdDelete /> </p>
              <p className={`${task.completed==="yes"?"text-green-600":""} cursor-pointer`}><IoIosCloudDone/></p>

              
            </div>
            {/* -------------------------- */}
          </div>
        );
      })}

      {/* ------------------------------------------- */}
      <Link to="/add">
        <div className="w-70 h-60 flex justify-center items-center border cursor-pointer hover:bg-slate-300 bg-slate-400 border-dashed">
          <p>Add </p>
        </div>
      </Link>
    </div>
    </div>
  );
}

export default Tasks;
