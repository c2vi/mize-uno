import { useState } from 'react'
import { Link } from 'react-scroll'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const unoongoinggame =
  'https://www.thesprucecrafts.com/thmb/W7vX1ntLjL6UksyxBXmFFIcB4Ak=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-play-uno-4169919-hero-2c26a4843b9d4d908e760df80687e445.jpg'

const Landing = () => {
  // //just playing around

  // const [lobbyid, setLobbyID] = useState(1)
  // const [activeplayers, setActivePlayers] = useState(1)

  // const lobbyHandler = () => {
  //   setLobbyID((prevState) => {
  //     prevState = lobbyid + 1
  //     return prevState
  //   })
  // }

  // const activePlayersHandler = () => {
  //   setActivePlayers((prevState) => {
  //     if (activeplayers < 10) {
  //       prevState = activeplayers + 1
  //       return prevState
  //     } else {
  //       prevState = activeplayers
  //       return prevState
  //     }
  //   })
  // }

  const [search, setSearch] = useState('')

  //just as an example [sewi backend]
  const data = [
    {
      id: 1,
      gamecode: '#0001',
      gamename: 'sewis uno',
      host: 'sewi',
      currentplayermax: '1/8',
    },
    {
      id: 2,
      gamecode: '#0002',
      gamename: 'lucas uno',
      host: 'lucas',
      currentplayermax: '2/8',
    },
    {
      id: 3,
      gamecode: '#0003',
      gamename: 'annas uno',
      host: 'anna',
      currentplayermax: '3/8',
    },
    {
      id: 4,
      gamecode: '#0004',
      gamename: 'lucies uno',
      host: 'lucie',
      currentplayermax: '4/8',
    },
    {
      id: 5,
      gamecode: '#0005',
      gamename: 'amelies uno',
      host: 'amelie',
      currentplayermax: '5/8',
    },
  ]

  const FilterHandler = (props) => {
    const items = props.props
    if (items.id % 2 === 0) {
      return (
        <tr key={items.id} className='flex flex-wrap justify-center w-full'>
          <td className='bg-red-200 font-normal w-1/6 border'>
            {items.gamecode}
          </td>
          <td className='bg-red-200 font-normal w-1/4 border'>
            {items.gamename}
          </td>
          <td className='bg-red-200 font-normal w-1/6 border'>{items.host}</td>
          <td className='bg-red-200 font-normal w-1/6 border'>
            {items.currentplayermax}
          </td>
        </tr>
      )
    } else {
      return (
        <tr key={items.id} className='flex flex-wrap justify-center w-full'>
          <td className='bg-yellow-100 font-normal w-1/6 border'>
            {items.gamecode}
          </td>
          <td className='bg-yellow-100 font-normal w-1/4 border'>
            {items.gamename}
          </td>
          <td className='bg-yellow-100 font-normal w-1/6 border'>
            {items.host}
          </td>
          <td className='bg-yellow-100 font-normal w-1/6 border'>
            {items.currentplayermax}
          </td>
        </tr>
      )
    }
  }

  return (
    <>
      <Navbar />
      {/* Hero */}
      <main>
        <div className='text-center relative bg-white overflow-hidden'>
          <div className='max-w-7xl mx-auto'>
            <div className='pt-16 relative z-10 bg-white sm:pb-10 md:pb-10 lg:max-w-2xl lg:w-full lg:pb-14 xl:pb-40'>
              <svg
                className='text-left hidden lg:block absolute right-[-10px] bot-[-150px] inset-y-0 text-white transform translate-x-1/2'
                fill='currentColor'
                viewBox='0 0 100 100'
                preserveAspectRatio='none'
                aria-hidden='true'
                height='680px'
                width='250px'
              >
                <polygon points='45,0 100,0 40,100 0,100' />
              </svg>
              <article className='mb-20 md:mb-20 lg:mb-40  mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-28'>
                <div className='sm:text-center lg:text-left'>
                  <h1 className='text-3xl tracking-tight font-extrabold sm:text-5xl md:text-6xl'>
                    <span className='block text-red-500 drop-shadow-lg xl:inline'>
                      PLAY UNO TOGETHER
                    </span>{' '}
                    <br />
                    <span className='block text-yellow-500 drop-shadow-lg xl:inline'>
                      WITH YOUR FRIENDS
                    </span>
                    <br />
                    <button className='py-3 px-2 bg-green-300 rounded-md font-bold text-2xl tracking-tighter shadow-lg hover:shadow-xl scale-90 hover:scale-100 duration-300'>
                      <span className='text-white'>
                        <Link to='games' smooth={true} duration={500}>
                          PLAY NOW
                        </Link>
                      </span>
                    </button>
                  </h1>
                </div>
              </article>
            </div>
          </div>
          <div className='pb-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
            <div>
              <img
                src={unoongoinggame}
                alt='ongoing uno game'
                className='h-full w-full'
              />
            </div>
          </div>
        </div>
      </main>

      {/* Lobby-list */}
      <section>
        <div className='flex flex-wrap justify-center'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-9 h-9'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 12h-15'
              />
            </svg>
          </span>
          <span name='games' className='px-2 font-bold text-3xl'>
            AVAILABLE GAMES
          </span>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-9 h-9'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 12h-15'
              />
            </svg>
          </span>
        </div>

        <article>
          <div className='px-40 pt-10 pb-20'>
            <div>
              <div>
                <div className='flex flex-wrap justify-center w-full pb-2'>
                  {/* Search option just for Lobby-Name */}
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search'
                    className='w-1/6 rounded-md pl-2 drop-shadow-sm border-2 shadow-sm'
                  />
                  <div className='w-7/12' />
                </div>
              </div>
              <table className='w-full'>
                <tr className='flex flex-wrap justify-center'>
                  {/* <td> & 'font-bold' is just a temporary solution (couldn't figure out why it doesn't work with <th>) */}
                  <td className='w-1/6 font-bold border'>Game-Code</td>
                  <td className='w-1/4 font-bold border'>Game-Name</td>
                  <td className='w-1/6 font-bold border'>Host</td>
                  <td className='w-1/6 font-bold border'>Player</td>
                </tr>
              </table>
              <div>
                {data
                  .filter((item) => {
                    return search.toLowerCase() === ''
                      ? item
                      : item.gamename.toLowerCase().includes(search)
                  })
                  .map((item) => (
                    <>
                      <FilterHandler props={item} />
                    </>
                  ))}
              </div>
            </div>
          </div>
        </article>
      </section>

      <Footer />
    </>
  )
}

export default Landing
