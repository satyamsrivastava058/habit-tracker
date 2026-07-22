import React from 'react'
import { Menu, SunMoon, UserRound,ChevronDown, Calendar } from 'lucide-react'

const Header = ({setIsOpen, isOpen, setIsDark, isDark}) => {

  const iconStyle = isDark ? "text-white" : "text-black";

  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-us',{
    weekday:'long',
    month: 'long',
    day:'numeric'
  })

  return (
    <nav>
      <div className=' min-h-17 flex justify-between items-center px-6 border-b border-b-gray-300 '>
        <Menu onClick={()=>{
          setIsOpen(!isOpen)
        }} className={`cursor-pointer ${iconStyle}`} />
        <div className=' flex items-center gap-4 cursor-pointer'>
            <SunMoon onClick={()=>{
              setIsDark(!isDark)
            }} className={`'mr-4' ${iconStyle}`}/>
            <UserRound className={`${iconStyle}`} />
            <h2>Hello,User</h2>
        </div>
      </div>
      <div className='flex justify-between px-6 items-center min-h-17 my-4'>
        <div>
          <h1 className='text-3xl font-semibold'>Good morning, User!</h1>
          <p>Here's how your habits are progressing today.</p>
        </div>
        <button className={`flex gap-3 items-center border py-2 px-4 rounded border-blue-200 shadow-sm ${isDark ? "bg-gray-900 border-gray-700" : "bg-white border-blue-200"}`}>
          <Calendar className={isDark ? "text-gray-300" : "text-black"} />
          <p>{formattedDate}</p>
        </button>
      </div>
    </nav>
  )
}

export default Header