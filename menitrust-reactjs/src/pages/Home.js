import React from 'react'
import rmbanner from '../assets/home-banner-removebg-preview.png'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='headerContainer'>
        <Link to="/about">
          <button>About Us</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
