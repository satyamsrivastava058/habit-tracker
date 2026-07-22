import React, { useState } from 'react'
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList, PieChart, Pie, Cell} from 'recharts'
import { Trash2 } from 'lucide-react'

const DashboardContent = ({isDark, habits, handleToggle, handleAddHabit, handleDeleteHabit, ChartData, completionPercentage, today, weeklyProgressData, recentActivity, getTimeAgo}) => {

const [newHabit, setNewHabit] = useState("");

const [showInput, setShowInput] = useState(false);

function handleShowInput() { 
  setShowInput(true);
}

  return (
    <div  className={`grid grid-cols-1 xl:grid-cols-3 gap-5 m-4 md:m-6 ${isDark ? "text-white" :"text-gray-900"}`}>
        <div className={`xl:row-span-2 rounded-xl p-5 border border-blue-200 space-y-4 shadow-sm ${isDark ? "bg-gray-900 border-gray-700" : "bg-white border-blue-200"} `}>
            <h1 className='text-xl font-semibold'>Today's habits</h1>
            {habits.map((habit,idx ) => {
              return(
                <p key={idx} className='flex justify-between items-center pb-3 border-b  border-gray-300'> 
                  {habit.name} 
                  <div className='flex items-center justify-between gap-3.5'>
                    <input className='w-4 h-4 accent-green-600' type='checkbox' 
                    checked={habit.completedDates.includes(today)} 
                    onChange={ () => {
                      handleToggle(habit.id);
                    }}
                    />
                    <Trash2 size={20} color="#8f0000" 
                    onClick={ () => {
                      handleDeleteHabit(habit.id)
                    }}
                    />
                  </div>
                </p>
              )
            })}
            {showInput && 
            <input 
            className={`w-full flex items-center justify-center pb-3 border-b  border-gray-300 ${isDark?'bg-gray-800 border-gray-700 text-white': 'bg-white border-gray-300'}`}
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
            className='text-[#494deb] cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:' 
            onClick={() => {
              handleShowInput();
            }}
            >+ Add habits</button>
        </div>
        <div className='xl:col-span-2 flex flex-col lg:flex-row gap-5'>
            <div className={` rounded-xl p-5 border border-blue-200 space-y-4 flex-1 shadow-sm ${isDark ? "bg-gray-900 border-gray-700" : "bg-white border-blue-200"}`}>
              <h1 className='text-xl font-semibold mb-6'>Today's Progress</h1>
              <div className='flex gap-5  items-center'>
                  <div className='relative w-45 h-40'>
                      <ResponsiveContainer width='100%' height='100%'>
                          <PieChart>
                              <Pie 
                                data={ChartData}
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
                          <h1 className='text-2xl font-bold'>{Math.round(completionPercentage)}%</h1>
                          <p className='text-gray-500'>Completed</p>
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
                   <div className={`rounded-xl p-5 border border-blue-200 shadow-sm flex-[1.7] ${isDark ? "bg-gray-900 border-gray-700" : "bg-white border-blue-200"}`}>
                       <h1 className='text-xl font-semibold mb-6'>Weekly Progress</h1>
                       <div>
                           <ResponsiveContainer width='100%' height={220}>
                               <BarChart data={weeklyProgressData}>
                                   <XAxis dataKey={'day'}
                                   axisLine={false}
                                   tickLine={false}
                                   tick={{ fontWeight: 600, fill:isDark ? "#d1d5db" : "#374151" }}/>
                                   <YAxis dataKey={'progress'}
                                     axisLine={false}
                                     tickLine={false}
                                     tick={{ fontWeight: 600, fill:isDark ? "#d1d5db" : "#374151" }}
                                     tickFormatter={(value) => `${value}%`}/>
                                   <Bar
                                     dataKey={'progress'}
                                     fill='#494deb'
                                     radius={[6,6,0,0]} />
                                     <CartesianGrid vertical={false} strokeDasharray="0" stroke={isDark ? "#374151" : "#e5e7eb"} />
                               </BarChart>
                           </ResponsiveContainer>
                       </div>
               </div>
        </div>
        <div className={`xl:col-span-2  rounded-xl p-5 border border-blue-200 shadow-sm space-y-4 ${isDark ? "bg-gray-900 border-gray-700" : "bg-white border-blue-200"}`}>
            <h2 className='text-xl font-semibold'>Recent Completions</h2>
            {recentActivity.map((activity) => {
              return(
              <div
                key={activity.name}
                className='flex justify-between items-center border-b border-b-gray-300 pb-3'
              >
                <p>
                  Completed "{activity.name}"
                </p>
                <p>
                  {getTimeAgo(activity.lastCompletedDate)}
                </p>
              </div>
              )
            })}
        </div>
    </div>
  )
}

export default DashboardContent