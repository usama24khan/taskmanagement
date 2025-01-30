import { Link } from "react-router-dom"

function NavigationBar() {
  return (
    <div className="bg-slate-300 w-[15vw] h-screen flex   ">
     <div className="flex-col flex mt-10 gap-y-6">
     <Link to="/">Dashboard</Link>
     <Link to="/">Setting</Link>
        
     </div>
      
    </div>
  )
}

export default NavigationBar
