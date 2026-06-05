import React, { useState } from 'react'
import Header from './Header'
import {
  ClipboardList,
  CircleCheckBig,
  Flame,
  Trophy
} from "lucide-react"
import StatsCard from './StatsCard'
import DashboardContent from './DashboardContent'

const MainContent = ({setIsOpen, isOpen, setIsDark, isDark}) => {

  const [habits, setHabits] = useState([
    {
    name: "Drink Water",
    completed: false
  },

  {
    name: "Morning Workout",
    completed: true
  },

  {
    name: "Read 10 Pages",
    completed: false
  }
  ])


  const statsData = [
  {
    title: "Total Habits",
    value: 8,
    subtitle: "+2 from last week",
    icon: ClipboardList
  },
  {
    title: "Completed Today",
    value: 5,
    subtitle: "62% completion rate",
    icon: CircleCheckBig
  },
  {
    title: "Current Streak",
    value: 7,
    subtitle: "days in a row",
    icon: Flame
  },
  
  {
    title: "Best Streak",
    value: 12,
    subtitle: "days in a row",
    icon: Trophy
  }
]
  return (
    <div className='min-h-screen w-full '>
        <Header setIsOpen={setIsOpen} isOpen={isOpen} setIsDark={setIsDark} isDark={isDark}/>
        <div className='flex gap-5 px-6 flex-nowrap'>
          {statsData.map((item,idx) => {
          return <StatsCard key={idx} {...item}/>
        })}
        </div>
        <DashboardContent />
    </div>
  )
}

export default MainContent