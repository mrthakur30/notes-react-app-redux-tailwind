import React from 'react'
import NoteIcon from "../../assets/NoteIcon.svg";

function Header() {
  return (
    <div className=''>
         <nav className="  h-16 flex  items-center gap-4 px-4 bg-stone-800">
              <p className="text-white font-mono text-4xl"> Nutes </p>
              <img src={NoteIcon} className="h-9 bg-slate-200 rounded-md"></img>
         </nav>
         <div className="  h-2  bg-yellow-300"></div>
    </div>
   
  )
}

export default Header