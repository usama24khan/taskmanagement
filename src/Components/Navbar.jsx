import { Link } from "react-router-dom";

function Navbar({tasks}) {
  return (
    <div className="flex justify-between items-center bg-slate-300">
      {/* -------------------LOGO------------------------ */}
      <div>
        <img src="/logo.png" height={40} width={40} alt="" />
      </div>
         {/* ----------------Welcome------------------- */}
      <div> Welcome You have {tasks.length} tasks        </div>
        {/* ----------------------------------- */}
      <div></div>
      {/* --------------------------------------------------- */}

      {/* -------------Button -------------------- */}
      <Link to={'/add'}>
      <div><button className="hover:bg-green-600 w-16 bg-green-500 rounded-lg cursor-pointer p-2 text-white">Add</button></div>
      </Link>
      {/* ------------------- */}
    </div>
  );
}

export default Navbar;
