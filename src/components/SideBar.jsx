import React from 'react'
import { Target } from 'lucide-react'
import { NavLink } from "react-router-dom";


const SideBar = ({isDark}) => {
  return (
    <div className={`min-h-screen w-64 lg:w-72 px-6 pb-6 pt-1 flex flex-col border-r border-r-gray-300 ${
    isDark
      ? "bg-gray-900 border-gray-700"
      : "bg-white border-blue-200"
}`}>
      <div className='flex pl-1 mb-4 items-center font-bold text-xl gap-4 min-h-15 w-full '>
        <Target size={28} color="#132186" strokeWidth={1.5} />
        <h1>HabitTrack</h1>
      </div>
      <div className=' flex flex-col flex-1 justify-between h-full pl-2'>
        <div className='flex flex-col gap-5 font-semibold text-l text-[#494deb] cursor-pointer' >
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/project-info">Project Information</NavLink>
        </div>
        <div className={`min-h-20 rounded-xl flex flex-col items-center justify-center font-semibold ${isDark? "bg-gray-800" : "bg-[#f1f4fd]" }`}>
          <h1 className="text-[#494deb]">Small habits,</h1>
          <h1 className={isDark ? "text-white" : "text-gray-900"}>big changes.</h1>
        </div>
      </div>
    </div> 
  )
}

export default SideBar