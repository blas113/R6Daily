import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/CardGames.css'

function CardGames() {
  return (
    <div>
      <div className='gameCard'>
        <img src="" alt="" />
        <h3>Wordle</h3>
        <Link to={'/Wordle'}><button > PLAY</button></Link>
      </div>
    </div>
  )
}

export default CardGames