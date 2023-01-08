import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Testing = () => {
  const [lobbyid, setLobbyID] = useState(1)
  /*
  //same function as the clickhandler below
  const clickHandler = () => {
    setLobbyID((prevState) => {
      prevState = lobbyid + 1
      return prevState
    })
  }
*/
  //same function as the clickhandler above
  const clickHandler = () => {
    setLobbyID(lobbyid + 1)
  }

  return (
    <section className='ml-10 mt-5'>
      <button type='button' className=''>
        <Link to='/'>Landing</Link>
      </button>
      <h1 className='text-3xl font-bold mb-10'>Welcome to !UNO</h1>
      <h2 className='text-2xl font-bold'>Server-List</h2>
      <ol className='list-disc'>
        <li className='ml-5'>
          <button
            className='hover:underline'
            type='button'
            onClick={() => clickHandler()}
          >
            Lobby-{lobbyid}
          </button>
        </li>
      </ol>
    </section>
  )
}

export default Testing
