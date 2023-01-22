import React from 'react'
import './index.css'
import { useState } from 'react'

import { useItem, useItems, getItem, id } from './index'

const Landing = () => {
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
      <div className='font-extrabold text-3xl text-gray-600'>
        Welcome to the Player Render!!
      </div>
    </>
  )
}

export default Landing
