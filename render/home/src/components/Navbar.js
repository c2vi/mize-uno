import React from 'react'
//import { Link } from 'react-router-dom'
                //<Link to='/'>
                //</Link>
                //<Link to='/signin'>Sign In</Link>
                //<Link to='/signup'>Sign Up</Link>
import Navbarscrolls from './Navbarscrolls'

const unologo =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/UNO_Logo.svg/2560px-UNO_Logo.svg.png'

                  //<img src={unologo} alt='logo' className='h-16 w-[h*1.43]' />
const Navbar = () => {
  return (
    <>
      <header>
        <div className='w-full h-20 z-10 bg-white'>
          <div className='flex justify-between items-center w-full h-full'>
            <div className='flex items-center mx-40'>
              <button
                type='button'
                className='scale-90 hover:scale-100 duration-300'
              >
	  HELLO
              </button>{' '}
              <Navbarscrolls highlighted='games' />
            </div>
            <div className='pr-40'>
              <button className='font-semibold px-5 py-2 rounded-md  text-blue-500 bg-slate-200 hover:text-white hover:bg-blue-500 duration-500 drop-shadow-md hover:drop-shadow-lg  bg-transparent mr-4'>
	  Log In
              </button>
              <button className='font-semibold px-5 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 drop-shadow-md hover:drop-shadow-lg duration-300 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300'>
	  Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default Navbar
