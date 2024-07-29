import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='bandName'>
        <h1>MEN I TRUST</h1>
      </div>
      <div className='headerContainer'>
        <Link to="/about">
          <button>About Us</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
