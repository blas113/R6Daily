import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/CardGames.css'

function CardGames() {
  return (
    <div>
     <Link to={'/Wordle'}> <div className='gameCard'>
        <img src="../commons/img/images.jpg" alt="" />
        <h3>PLAY</h3>
        <h4>R6Daily Wordle</h4>
      </div></Link>
    </div>
  )
}

export default CardGames