import React from 'react'
import banner from '../assets/home-banner.jpg'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${banner})` }}>
      <div className='headerContainer'>
        <Link to="/about">
          <button>About Us</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
