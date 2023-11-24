"use client"

import React from 'react'

const Dashboard = () => {
  return (
    <div className ="grid grid-cols-2 gap-2">
      <section>
        <div className='p-2'>
          <div>
            <h1 className='float-left'>Hello Maria!</h1>          
            <button className='float-right'>Book Now</button>
          </div>
          
          <p><strong>Note:</strong> Appointment colored green are made by dentists</p>

          <div className="grid grid-cols-2 gap-2">
            <input className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
            <div className='flex items-center'>
              <p>Filter By:</p>
              <select className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'></select>
            </div>
          </div>

        </div>
      </section>
      <section>
        <h1>calendar here</h1>
      </section>
    </div>
  )
}

export default Dashboard
