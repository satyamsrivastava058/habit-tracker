import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'

import SideBar from './components/SideBar'
import MainContent from './components/MainContent'
import ProjectInfo from './components/ProjectInfo'


const App = () => {

  const [isOpen, setIsOpen] = useState(true)
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={`${isDark ? "bg-gray-950 text-white" : "bg-white text-black"}  flex min-h-screen transition-colors duration-300`}>
      {isOpen && <SideBar isDark={isDark}/>}
      <Routes>
        <Route path="/" element={<MainContent setIsOpen={setIsOpen} isOpen={isOpen } setIsDark={setIsDark} isDark={isDark}/>} />
        <Route path="/project-info" element={<ProjectInfo isDark={isDark}/>} />
      </Routes>
      
    </div>
  )
}

export default App