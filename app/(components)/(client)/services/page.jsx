"use client"

import React from 'react'
import { TEST_TEXT } from '../../store/enums'

const Dashboard = () => {
  return (
    <div className='ml-28 mt-10 w-2/3'>
      <h1 className='text-[40px] font-bold text-[#3AB286]'>Help & FAQs</h1>
      <section className='mt-4'>
        <p className='font-bold'>Question 1:</p>
        <p>{TEST_TEXT}</p>
      </section>
      <section className='mt-4'>
        <p className='font-bold'>Question 2:</p>
        <p>{TEST_TEXT}</p>
      </section>
    </div>
  )
}

export default Dashboard
