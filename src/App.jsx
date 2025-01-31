import { useState } from 'react'
import './App.css'
import AddTask from './Components/AddTask'
import Navbar from './Components/Navbar'
import NavigationBar from './Components/NavigationBar'
import SideBar from './Components/SideBar.jsx'
import Tasks from './Components/Tasks'
import { Routes, Route } from "react-router-dom"
import Update from './Components/Update.jsx'
function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'))
    return Array.isArray(savedTasks) ? savedTasks : []
  })

  return (
    <>
      <div className='flex flex-col bg-slate-300 pl-4 pr-4'>
        <Navbar tasks={tasks} />
        <div className='md:flex flex md:flex-row  flex-col-reverse'>

          <NavigationBar />
          
            <Routes>
              <Route path='/' element={<Tasks tasks={tasks} setTasks={setTasks} />} />
              <Route path='/add' element={<AddTask tasks={tasks} setTasks={setTasks} />} />
              <Route path='/update/:id' element={<Update tasks={tasks} setTasks={setTasks} />} />


            </Routes>
            <SideBar tasks={tasks} />
          
        </div>

      </div>

    </>
  )
}

export default App
