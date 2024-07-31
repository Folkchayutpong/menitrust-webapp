import React from 'react'
import '../styles/About.css'
import bandPic from '../assets/bandPic2.jpg'
import emma from '../assets/Emmanuelle Proulx.jpg'
import jessy from '../assets/Jessy Caron.jpg'
import dragos from '../assets/Dragos Chiriac.jpg'

function About() {
  return (
    <div className='about-container'>
      <h1 className='menitrust'>What is Men I Trust?</h1>
      <div className='history'>
        <div className='bandImg'>
          <img src={bandPic} className='pic' />
        </div>
        <div className='p1'><p>Men I Trust is a Canadian indie band from Montreal, Quebec. Formed in 2014, the band consists of <b>Emmanuelle Proulx (lead vocals, guitar), Jessy Caron (guitar, bass guitar), and Dragos Chiriac (keyboards).</b>
          The group has self-released all of their music and has released physical editions on the Canadian indie label Return to Analog.
          Men I Trust has independently released four studio albums: Men I Trust (2014), Headroom (2015), Oncle Jazz (2019), and Untourable Album (2021).
          They have also released two physical-only EPs, Men I Trust (2017) and Tailwhip (2018).</p>
          <h4 className='source'><a href='https://en.wikipedia.org/wiki/Men_I_Trust' target='_blank'>-Wikipedia-</a></h4>
        </div>
      </div>
      <h1 className='members'>Members</h1>
      <div className='members-container'>
        <div className='list_members'>
          <div className='member'><img src={emma} /><h2>Emmanuelle Proulx</h2></div>
          <div className='member'><img src={jessy} /><h2>Jessy Caron</h2></div>
          <div className='member'><img src={dragos} /><h2>Dragos Chiriac</h2></div>
        </div>
      </div>
    </div>
  )
}

export default About
