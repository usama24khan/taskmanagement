import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
function Navbar({tasks}) {
  const [dropDown,setDropDown]=useState(false)
  return (
    <div className="flex flex-col">
    <div className="flex justify-between items-center h-20 bg-slate-300">
      {/* -------------------LOGO------------------------ */}
      <div>
        <img src="/logo.png" height={40} width={40} alt="" />
      </div>
         {/* ----------------Welcome------------------- */}
      <div> Welcome You have <span className="text-blue-700">{tasks.length}</span> tasks        </div>
        {/* ----------------------------------- */}
      <div></div>
      {/* --------------------------------------------------- */}

      {/* -------------Button -------------------- */}
      <Link to={'/add'}>
      <div><button className="hover:bg-green-600 w-16 bg-green-500 rounded-lg cursor-pointer p-2 text-white">Add</button></div>
      </Link>
      {/* ------------------- */}

      <div className="md:hidden text-6xl">
      <GiHamburgerMenu onClick={()=>setDropDown(pre=>!pre)} />
      </div>
      
    </div>
    {/* --------------Menu--------------- */}
    <div className={`${dropDown?"h-32":"h-0"} flex flex-col overflow-hidden gap-y-4 bg-slate-300 justify-center h-0 transition-all text-2xl font-bold `}>
     <Link to={'/'}> Dashboard</Link>
     <Link to={'/'}> Setting</Link>
    </div>
    
    </div>

  );
}

export default Navbar;
