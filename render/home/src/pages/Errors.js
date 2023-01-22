//import { Link } from 'react-router-dom'
              //<Link to='/'>4+</Link>

const Errors = () => {
  return (
    <>
      <section>
        <div className='pt-20 flex justify-center'>
          <div className='text-9xl font-extrabold text-violet-400 drop-shadow-lg'>
            404
          </div>
        </div>
        <div className='flex justify-center'>
          <span className='text-lg'>
            Sorry, that page couldn't be found! Wanna try another:{' '}
          </span>
          <button type='button' className='hover:scale-125 duration-200'>
            <span className='pl-2 font-semibold text-lg'>
            </span>
          </button>
        </div>
      </section>
    </>
  )
}

export default Errors
