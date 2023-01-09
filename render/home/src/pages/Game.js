import gamebg from '../../public/assets/game-background.png'

// just a temporary solution - want to handle this dynamic
const PlayerHandler = (props) => {
  if (props.playercount === 2) {
  }
}
const Game = () => {
  return (
    <>
      <div>
        <img src={gamebg} alt='' className='h-screen w-screen brightness-50' />
        <PlayerHandler />
      </div>
    </>
  )
}

export default Game
