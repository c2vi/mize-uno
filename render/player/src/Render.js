import React from 'react'
import './index.css'
import { useState } from 'react'

import { useItem, useItems, getItem, id } from './index'

// just a temporary solution - want to handle this dynamic
const gamebg =
  'https://1.bp.blogspot.com/-CUGrjTz--uk/YKexcWh29nI/AAAAAAAAh4M/HslKXMPNl7AI42WH7sNMKMgjkS_KJLSoQCLcBGAsYHQ/s1920/V1-CUTE-TROPICAL-DESKTOP-WALLPAPER-HD.png'

// just as an example [sewi backend]
const player_data = [
  {
    player_id: 1,
    player_name: 'lucas',
    player_cards: ['yellow_5', 'green_0'],
    player_active: 'no',
  },
  {
    player_id: 2,
    player_name: 'sebastian',
    player_cards: ['red_1', 'blue_7', 'green_9'],
    player_active: 'no',
  },
  {
    player_id: 3,
    player_name: 'sophia',
    player_cards: ['red_3', 'blue_6', 'green_8', 'yellow_1'],
    player_active: 'yes',
  },
]

const game_data = [
  {
    game_id: 1,
    player_count: ['lucas', 'sebastian', 'sophia'],
    card_in_middle: 'yellow_4',
  },
]

const ActivePlayerCheck = () => {
  let active_player = player_data.filter((item) => item.player_active === 'yes')
  // pr("active-player", active_player)
  return (
    <ul>
      <li>
        {active_player[0].player_name}
        {' ['}
        {active_player[0].player_cards.length}
        {']'}
      </li>
    </ul>
  )
}

const PlayerList = () => {
  return (
    <div className='pl-4 box-border'>
      {player_data.map((item) => {
        return (
          <div key={item.player_id}>
            {item.player_name}
            {' ['}
            {item.player_cards.length}
            {']'}
          </div>
        )
      })}
    </div>
  )
}

const CardInMiddle = () => {
  let card_in_middle = game_data[0].card_in_middle
  // pr("middle-card", game_data[0].card_in_middle)
  return card_in_middle
}

const LeaveButton = () => {
  return (
    <>
      <div>
        <button
          type='button'
          className='py-3 px-4 bg-red-300 rounded-md font-bold text-2xl tracking-tighter shadow-lg hover:shadow-xl scale-90 hover:scale-100 duration-300'
        >
          LEAVE
        </button>
      </div>
    </>
  )
}

const PlayerCards = (props) => {
  let player = 3
  let [cards_array] = player_data.filter((item) => item.player_id === player)
  // pr('cards: ', cards_array.player_cards)
  return cards_array.player_cards[props.num]
}

const Game = () => {
  const [item, setItem] = useItem()
  pr(item)
  function update_cards() {
    setItem((prev) => ({
      ...prev,
      cards_of_player: prev.cards_of_player + ['green_5'],
    }))
  }
  return (
    <>
      <div className='relative'>
        <img
          type='image'
          src={gamebg}
          alt=''
          className='-z-10 h-screen w-screen brightness-50'
        />
        <div className='absolute text-3xl text-amber-400 top-10 -translate-y-1/2 flex w-1/4 pl-8'>
          List of Players:
          <div className='absolute top-10 flex'>
            <PlayerList />
          </div>
        </div>
        <div className='absolute text-3xl text-amber-400 top-8 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <ActivePlayerCheck />
        </div>
        <div className='absolute text-3xl text-amber-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          Current Card: <CardInMiddle />
        </div>
        <div className='absolute text-3xl text-amber-400 bottom-8 left-1/2 -translate-x-1/2'>
          <PlayerCards num={1} />
        </div>
        <div className='absolute text-3xl text-white bottom-8 right-0 -translate-x-1/2'>
          <LeaveButton />
        </div>
      </div>
    </>
  )
}

export default Game
