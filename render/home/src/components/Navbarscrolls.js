import React from 'react'
//import { Link } from 'react-scroll'
          //<Link to='games' smooth={true} duration={500}>
          //</Link>

const Navbarscrolls = (props) => {
  if (props.highlighted === 'games') {
    return (
      <div className='pl-10 text-lg font-semibold mr-4 drop-shadow-md text-gray-500 hover:text-gray-900 scale-90 hover:scale-100 duration-500'>
        <button type='button'>
            Games
        </button>
      </div>
    )
  } else {
    return <></>
  }
}

export default Navbarscrolls
