import React from 'react'
import '../styles/Footer.css'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <div className='footer'>
      <div className='social-logo'>
        <a href='https://x.com/menitrust' target="_blank"><XIcon /></a>
        <a href='https://www.instagram.com/menitrust/' target="_blank"><InstagramIcon /></a>
        <a href='https://www.facebook.com/menitrust/' target="_blank"><FacebookIcon /></a>
        <a href='https://menitrustmerch.com/' target="_blank"><ShoppingBasketIcon /></a>
      </div>
      <div className='important'>Important!</div>
      <div className='note'><span> This website is a learning project for educational purposes only and is not affiliated with Men I Trust in any way.
        <br />Do not use this for commercial purposes or in any misleading manner. For official information or to contact Men I Trust, please visit their official social media channels.</span>
      </div>
    </div>
  )
}

export default Footer
