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

  const today = new Date().toISOString().split("T")[0];

  const [habits, setHabits] = useState(() => {
  const savedHabits = localStorage.getItem("Habits");

  if (savedHabits) {
    return JSON.parse(savedHabits);
  }
    return [
    {
    name: "Drink 8 glasses of water",
    id: 1,
    createdAt: Date.now(),
    completedDates: []
  },

  {
    name: "Morning Workout",
    id: 2,
    createdAt: Date.now(),
    completedDates :[]
  },

  {
    name: "Read 10 Pages",
    id: 3,
    createdAt: Date.now(),
    completedDates :[]
  }, 

  {
    name: 'Meditate for 10 minutes',
    id: 4,
    createdAt: Date.now(),
    completedDates :[]
  }
  ]})

  // useEffect(() => {
  //   const savedHabits = localStorage.getItem("Habits");

  //   if(savedHabits) {
  //     setHabits(JSON.parse(savedHabits));
  //   }
  // }, []); 

  useEffect(() => {
    localStorage.setItem("Habits", JSON.stringify(habits));
  }, [habits]);
  
  const handleToggle = (id) =>{
    const updatedHabits = habits.map((habit) => {
      if(habit.id === id) {
        if(habit.completedDates.includes(today)){
          return{
            ...habit,
            completedDates: habit.completedDates.filter((date) => {
              return date !== today
            })
          }
        }
        else {
          return{
            ...habit,
            completedDates: [...habit.completedDates,
              today
            ]
          }
        }
      }
      return habit
    })
    setHabits(updatedHabits);
  }

  const handleAddHabit = (newHabit) => {
      const now = Date.now();
    if(newHabit.trim() === ""){
      return false
    }
     const newHabitObject = {name: newHabit, 
      id: now,
      createdAt: now,
      completedDates: []
  }
  setHabits([
    ...habits,
    newHabitObject
  ])

  return true
}

const handleDeleteHabit = (id) => {
  const updatedHabits = habits.filter((habit) => {
    return habit.id !== id
  })

  setHabits(updatedHabits);
}

  const completedCount = habits.filter((habit) => {
    return habit.completedDates.includes(today);
  }).length;

  const remainingHabits = habits.length - completedCount;

  const completionPercentage = habits.length>0 ? (completedCount/habits.length)*100 : 0;
  
  const ChartData = [
    { name: "Completed", value: completedCount },
    { name: "Remaining", value: remainingHabits }
  ]

  const calculateCurrentStreak = (habits) => {
    let streak = 0;
    let date = new Date();
    let currentDate =  date.toISOString().split("T")[0];

    while(habits.some((habit) => {
      return habit.completedDates.includes(currentDate);
    }
    )) {
      streak++;
      date.setDate(date.getDate()-1);
      currentDate =  date.toISOString().split("T")[0];
    }
    return streak
  }


const currentStreak = calculateCurrentStreak(habits);

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
    subtitle: `${Math.round(completionPercentage)}% Completion Rate`,
    icon: CircleCheckBig
  },
  {
    title: "Current Streak",
    value: currentStreak,
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
        <DashboardContent habits={habits} handleToggle={handleToggle} handleAddHabit={handleAddHabit} handleDeleteHabit={handleDeleteHabit} ChartData={ChartData} completionPercentage={completionPercentage} today={today}/>
    </div>
  )
}

export default MainContent