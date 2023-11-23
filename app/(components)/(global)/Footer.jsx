import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    // <div className="absolute bottom-0 w-full">
      <div className='flex justify-between items-center py-3 bg-gradient-to-r from-teal-600 to-blue-700 md:px-20 px-10 text-white'>
      <div className='text-xs'>© 2023 DentFix Dental Clinic. All Rights Reserved. </div>
      <div className="relative">
      <Link href="/faq" className='absolute -bottom-1 right-3 rounded-full bg-teal-600 p-3 text-white text-[1.3em]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
      </Link>
      </div>
    </div>
    // </div>
  )
}

export default Footer