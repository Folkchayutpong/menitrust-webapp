import React, { useState } from 'react'
import logo from '../assets/mit-logo.jpg'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'


function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }


    return (
        <div className='navbar'>
            <div className='leftSide noMask' id={openLinks ? "open" : "closed"}>
                <Link to='/'>
                    <img src={logo} alt="Logo" />
                </Link>
                <div className='bandName'><span>Men I Trust</span></div>
                {/* <div className='hiddenLinks'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/music'>Music</Link>
                    <Link to='/contact'>Contact</Link>
                </div>  */}
            </div>
            <div className='rightSide noMask'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/music'>Music</Link>
                <Link to='/contact'>Contact</Link>
                {/* <button onClick={toggleNavbar}>
                    <span className="material-symbols-outlined">Menu</span>
                </button> */}
            </div>
        </div>
    )
}

// onClick={toggleNavbar}



export default Navbar
