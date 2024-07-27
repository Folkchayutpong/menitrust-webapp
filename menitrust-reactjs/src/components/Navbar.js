import React from 'react'
import logo from '../assets/mit-logo.jpg'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='leftSide'>
                <Link to='/'>
                    <img src={logo} />
                </Link>
            </div>
            <div className='rightSide'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/music'>Music</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar
