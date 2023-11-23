import React from 'react'

const OperatingHours = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      {/* <h1 className='text-inherit font-bold md:text-2xl text-xl'>Operating Hours</h1> */}
      <div className="relative overflow-x-hidden">
          <table className="w-full text-sm text-left text-inherit">
              <tbody>
                  <tr className="">
                      <th scope="row" className="px-6 py-3 font-medium text-white whitespace-nowrap">
                          <span className='text-inherit bg-teal-600 px-3 py-1 shadow-sm rounded-full'>Sunday</span>
                      </th>
                      <td className="text-right text-inherit">
                          Clinic Closed
                      </td>
                  </tr>
                  <tr className="">
                      <th scope="row" className="px-6 py-3 font-medium text-white whitespace-nowrap">
                          <span className='bg-teal-600 shadow-sm px-3 py-1 rounded-full'>Monday</span>
                      </th>
                      <td className="text-right">
                          8:00am to 6:00pm
                      </td>
                  </tr>
                  <tr className="">
                      <th scope="row" className="px-6 py-3 font-medium text-white whitespace-nowrap">
                          <span className='bg-teal-600 shadow-sm px-3 py-1 rounded-full'>Tuesday</span>
                      </th>
                      <td className="text-right">
                          8:00am to 6:00pm
                      </td>
                  </tr>
                  <tr className="">
                      <th scope="row" className="px-6 py-3 font-medium text-white whitespace-nowrap">
                          <span className='bg-teal-600 shadow-sm px-3 py-1 rounded-full'>Wednesday</span>
                      </th>
                      <td className="text-right">
                          8:00am to 6:00pm
                      </td>
                  </tr>
                  <tr className="">
                      <th scope="row" className="px-6 py-3 font-medium text-white whitespace-nowrap">
                          <span className='bg-teal-600 shadow-sm px-3 py-1 rounded-full'>Thursday</span>
                      </th>
                      <td className="text-right">
                          8:00am to 6:00pm
                      </td>
                  </tr>
                  <tr className="">
                      <th scope="row" className="px-6 py-3 font-medium text-white whitespace-nowrap">
                          <span className='bg-teal-600 shadow-sm px-3 py-1 rounded-full'>Friday</span>
                      </th>
                      <td className="text-right">
                          8:00am to 6:00pm
                      </td>
                  </tr>
                  <tr className="">
                      <th scope="row" className="px-6 py-3 font-medium text-white whitespace-nowrap">
                          <span className='text-inherit bg-teal-600 px-3 py-1 shadow-sm rounded-full'>Saturday</span>
                      </th>
                      <td className="text-right text-inherit">
                          Clinic Closed
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default OperatingHours