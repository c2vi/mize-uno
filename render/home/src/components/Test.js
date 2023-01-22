import React from 'react'
import '../index.css'

const Test = () => {
  return (
    <>
      <button className='font-extrabold text-9xl hover:text-xl hover:text-gray-600 duration-700'>
        Test
      </button>
      <div>
        <div className='p-4 rounded-lg shadow items-center p-6 bg-gray-100'>
          <div className='text-md font-semibold text-center text-gray-400'>
            <div className='flex flex-wrap justify-center'>
              <div className='w-1/3'>© UNO-Online ABC &nbsp; 2023</div>
              <div className='w-1/3'>
                <button className='hover:text-gray-600'>Legal</button>
              </div>
              <span className='w-1/3'>
                <button className='hover:text-gray-600'>Terms of Use</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Test
