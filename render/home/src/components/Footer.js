import React from 'react'

const Footer = () => {
  const d = new Date()
  let year = d.getFullYear()

  return (
    <>
      <footer>
        <div className='p-4 rounded-lg shadow md:items-center md:p-6 bg-gray-100'>
          <div className='text-md font-semibold sm:text-center text-gray-400'>
            <article className='flex flex-wrap justify-center'>
              <span className='w-1/3'>© UNO-Online ABC &nbsp; {year}</span>
              <span className='w-1/3'>
                <button className='hover:text-gray-600'>Legal</button>
              </span>
              <span className='w-1/3'>
                <button className='hover:text-gray-600'>Terms of Use</button>
              </span>
            </article>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
