import React from 'react'
import Navbar from '../components/Navbar.jsx'
import CardGames from '../components/CardGames.jsx'
import '../styles/Home.css'

const Home =() =>{
  return (
  <>
    <Navbar />
   
    <hr />
    
   <h2>Enjoy dayli games of Rainbow six siege</h2>

   <CardGames />
 </>
  )
}

export default Home