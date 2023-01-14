// just a temporary solution - want to handle this dynamic
const gamebg =
  'https://1.bp.blogspot.com/-CUGrjTz--uk/YKexcWh29nI/AAAAAAAAh4M/HslKXMPNl7AI42WH7sNMKMgjkS_KJLSoQCLcBGAsYHQ/s1920/V1-CUTE-TROPICAL-DESKTOP-WALLPAPER-HD.png'

const PlayerHandler = (props) => {
  if (props.playercount === 2) {
    return (
      <>
        <div></div>
      </>
    )
  } else if (props.playercount === 3) {
    return (
      <>
        <div></div>
      </>
    )
  } else if (props.playercount === 4) {
    return (
      <>
        <div></div>
      </>
    )
  } else if (props.playercount === 5) {
    return (
      <>
        <div></div>
      </>
    )
  } else if (props.playercount === 6) {
    return (
      <>
        <div></div>
      </>
    )
  } else if (props.playercount === 7) {
    return (
      <>
        <div></div>
      </>
    )
  } else if (props.playercount === 8) {
    return (
      <>
        <div></div>
      </>
    )
  } else {
    return <></>
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
