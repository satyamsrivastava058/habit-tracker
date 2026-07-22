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

const calculateBestStreak = (habits) => {
  const allDates = habits.map((habit) => {
    return habit.completedDates
  })
  const flatDates = allDates.flat();
  const uniqueDates  = (Array.from(new Set(flatDates)).sort());

  if(uniqueDates.length < 1) {
    return 0
  }
    let currentStreak = 1;
    let bestStreak = 1;
    for(let i = 1; i < uniqueDates.length; i++) {
      let previousDate = new Date(uniqueDates[i - 1]);
      let currentDate = new Date(uniqueDates[i]);
      previousDate.setDate(previousDate.getDate()+1)
      if(previousDate.getTime() === currentDate.getTime() ){
        currentStreak++;
      }
      else {
        currentStreak = 1;
      }
      bestStreak = Math.max(bestStreak, currentStreak)
    }
    return bestStreak
}

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

const calculateWeeklyProgress = (habits) => {
  const weeklyData = [];
  for(let i = 0; i < 7; i++) {
    let date = new Date();
    date.setDate(date.getDate() - i);
    const currentDate = date.toISOString().split("T")[0];
    const day = date.toLocaleDateString("en-US", {
      weekday: "short",
    });
    const completedCount = habits.filter((habit) => {
      return habit.completedDates.includes(currentDate);
    }).length;

    const progress = Math.round(habits.length>0 ? (completedCount/habits.length)*100 : 0);

    weeklyData.push({
      day,
      progress
    })
  }
  return weeklyData;
}

 const weeklyProgressData = calculateWeeklyProgress(habits)

  return (
    <div className='min-h-screen w-full '>
        <Header setIsOpen={setIsOpen} isOpen={isOpen} setIsDark={setIsDark} isDark={isDark}/>
        <div className='flex gap-5 px-6 flex-nowrap'>
          {statsData.map((item,idx) => {
          return <StatsCard key={idx} {...item}  />
        })}
        </div>
        <DashboardContent habits={habits} handleToggle={handleToggle} handleAddHabit={handleAddHabit} handleDeleteHabit={handleDeleteHabit} ChartData={ChartData} completionPercentage={completionPercentage} today={today} weeklyProgressData={weeklyProgressData}/>
    </div>
  )
}

export default MainContent