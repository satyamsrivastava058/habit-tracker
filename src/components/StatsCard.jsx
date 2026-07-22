import React from 'react'

const StatsCard = ({title, value, subtitle, icon: Icon, isDark}) => {
  return (
    <div className={`min-h-40 min-w-60 p-5 flex flex-1 flex-col justify-between border rounded-xl border-blue-200 shadow-sm ${isDark ? "bg-gray-900 border-gray-700" : "bg-white border-blue-200"}`}>
        <h2 className='font-semibold'>{title}</h2>
        <div className='flex justify-between'>
          <p className='text-4xl font-semibold '>{value}</p>
          <div className='border rounded-xl p-2'>
            <Icon  />
          </div>
        </div>
        <p>{subtitle}</p>
    </div>
  )
}

export default StatsCard