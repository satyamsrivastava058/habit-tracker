import React, { useState } from 'react'
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'

const App = () => {

  const [isOpen, setIsOpen] = useState(true)
  const [isDark, setIsDark] = useState(false)

  console.log(isDark);

  return (
    <div className={`${isDark ? "bg-black text-white" : "bg-white text-black"}  flex`}>
      {isOpen && <SideBar />}
      <MainContent setIsOpen={setIsOpen} isOpen={isOpen } setIsDark={setIsDark} isDark={isDark}/>
    </div>
  )
}

export default App