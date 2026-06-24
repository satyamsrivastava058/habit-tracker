import React, { useState } from 'react'
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList, PieChart, Pie, Cell} from 'recharts'
import { Trash2 } from 'lucide-react'

const DashboardContent = ({habits, handleToggle, handleAddHabit, handleDeleteHabit}) => {

    const weeklyProgressData = [
  {
    day: "Mon",
    progress: 70,
  },
  {
    day: "Tue",
    progress: 45,
  },
  {
    day: "Wed",
    progress: 85,
  },
  {
    day: "Thu",
    progress: 60,
  },
  {
    day: "Fri",
    progress: 90,
  },
  {
    day: "Sat",
    progress: 55,
  },
  {
    day: "Sun",
    progress: 75,
  }
]

const streakData = [
  { name: "Completed", value: 80 },
  { name: "Remaining", value: 20 },
]

const [newHabit, setNewHabit] = useState("");

const [showInput, setShowInput] = useState(false);

function handleShowInput() { 
  setShowInput(true);
}

  return (
    <div className='grid grid-cols-3 gap-5 min-h-105 m-6 '>
        <div className='row-span-2 rounded-xl p-5 border border-blue-300 space-y-4 '>
            <h1 className='text-xl font-semibold'>Today's habits</h1>
            {habits.map((habit,idx ) => {
              return(
                <p key={idx} className='flex justify-between items-center pb-3 border-b  border-gray-300'> 
                  {habit.name} 
                  <div className='flex items-center justify-between gap-3.5'>
                    <input className='w-4 h-4 accent-green-600' type='checkbox' 
                    checked={habit.completed} 
                    onChange={ () => {
                      handleToggle(idx);
                    }}
                    />
                    <Trash2 size={20} color="#8f0000" 
                    onClick={ () => {
                      handleDeleteHabit(idx)
                    }}
                    />
                  </div>
                </p>
              )
            })}
            {showInput && 
            <input 
            className='w-full flex items-center justify-center pb-3 border-b  border-gray-300'
            value={newHabit}
            onChange={ (e) => {
              setNewHabit(e.target.value)
            }}
            onKeyDown={ (e) => {
              if(e.key === "Enter"){
                const success = handleAddHabit(newHabit);

                if(success){
                  setNewHabit("")
                  setShowInput(false) 
                }
            }}}
            />}
            <button 
            className='text-[#494deb]'
            onClick={() => {
              handleShowInput();
            }}
            >+ Add habits</button>
        </div>
        <div className=' col-span-2 flex gap-5'>
            <div className=' rounded-xl p-5 border border-blue-300 space-y-4 flex-1 '>
              <h1 className='text-xl font-semibold mb-6'>Streak Overview</h1>
              <div className='flex gap-5  items-center'>
                  <div className='relative w-40 h-40'>
                      <ResponsiveContainer width='100%' height='100%'>
                          <PieChart>
                              <Pie 
                                data={streakData}
                                dataKey='value'
                                innerRadius={50}
                                outerRadius={60}
                                startAngle={90}
                                endAngle={-270}
                                paddingAngle={2}
                              >
                                  <Cell fill="#f97316" />
                                  <Cell fill="#e5e7eb" />
                              </Pie>
                          </PieChart>
                      </ResponsiveContainer>
                      <div className='absolute inset-0 flex flex-col items-center justify-center'>
                          <h1 className='text-3xl font-bold'>7</h1>
                          <p className='text-gray-500'>Days</p>
                      </div>
                  </div>
                  <div className='max-w-45'>
                    <p className='font-medium'>
                      You're doing great!
                    </p>
                    <p className='text-gray-500 text-sm'>
                      Keep it up and make
                    </p>
                    <p className='text-gray-500 text-sm'>
                      it a lifestyle.
                    </p>
                  </div>
               </div>
                   </div>
                   <div className=' rounded-xl p-5 border border-blue-300 flex-[1.7]'>
                       <h1 className='text-xl font-semibold mb-6'>Weekly Progress</h1>
                       <div>
                           <ResponsiveContainer width='100%' height={220}>
                               <BarChart data={weeklyProgressData}>
                                   <XAxis dataKey={'day'}
                                   axisLine={false}
                                   tickLine={false}
                                   tick={{ fontWeight: 600 }}/>
                                   <YAxis dataKey={'progress'}
                                     axisLine={false}
                                     tickLine={false}
                                     tick={{ fontWeight: 600 }}
                                     tickFormatter={(value) => `${value}%`}/>
                                   <Bar
                                     dataKey={'progress'}
                                     fill='#494deb'
                                     radius={[6,6,0,0]} />
                                     <CartesianGrid vertical={false} strokeDasharray="0" stroke="#e5e7eb" />
                               </BarChart>
                           </ResponsiveContainer>
                       </div>
               </div>
        </div>
        <div className='col-span-2  rounded-xl p-5 border border-blue-300 space-y-4'>
            <h2 className='text-xl font-semibold'>Recent Activities</h2>
            <div className='flex justify-between items-center border-b border-b-gray-300 pb-3'>
                <p>Completed "Morning Workout"</p>
                <p>7:30</p>
            </div>
            <div className='flex justify-between items-center border-b border-b-gray-300 pb-3'>
                <p>Completed "Drinks 8 glasses of water"</p>
                <p>7:15</p>
            </div>
            <div className='flex justify-between items-center border-b border-b-gray-300 pb-3'>
                <p>Added new habit "No sugar"</p>
                <p>yesterday</p>
            </div>
            <div className='flex justify-between items-center border-b border-b-gray-300 pb-3'>
                <p>Updated habit "Read 20 pages"</p>
                <p>yesterday</p>
            </div>
            <button className='text-[#494deb]'>View All Activity</button>
        </div>
    </div>
  )
}

export default DashboardContent