import React, { useState, useEffect } from 'react'
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
    name: "Drink 8 glasses of water",
    completed: false
  },

  {
    name: "Morning Workout",
    completed: true
  },

  {
    name: "Read 10 Pages",
    completed: false
  }, 

  {
    name: 'Meditate for 10 minutes',
    completed: true
  },

  {
    name: 'No sugar',
    completed: false
  }
  ])

  useEffect(() => {
    const savedHabits = localStorage.getItem("Habits");

    if(savedHabits) {
      setHabits(JSON.parse(savedHabits));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Habits", JSON.stringify(habits));
  }, [habits]);
  
  const handleToggle = (idx) =>{
    const updatedHabits = habits.map((habit,index) => {
      if(index === idx) {
        return{
          ...habit,
          completed: !habit.completed,
        }
      }
      return habit
    })
    setHabits(updatedHabits);
  }

  const handleAddHabit = (newHabit) => {
    if(newHabit.trim() === ""){
      return false
    }
     const newHabitObject = {name: newHabit, 
      completed: false
  }
  setHabits([
    ...habits,
    newHabitObject
  ])

  return true
}

const handleDeleteHabit = (idx) => {
  const updatedHabits = habits.filter((habit, index) => {
    return index !== idx
  })

  setHabits(updatedHabits);
}

  const completedCount = habits.filter((habit) => {
    return habit.completed;
  }).length;
  

  const statsData = [
  {
    title: "Total Habits",
    value: habits.length,
    subtitle: "+2 from last week",
    icon: ClipboardList
  },
  {
    title: "Completed Today",
    value: completedCount,
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
          return <StatsCard key={idx} {...item}  />
        })}
        </div>
        <DashboardContent habits={habits} handleToggle={handleToggle} handleAddHabit={handleAddHabit} handleDeleteHabit={handleDeleteHabit}/>
    </div>
  )
}

export default MainContent