import React from 'react'
import '../styles/Music.css'

function Music() {
  return (
    <div className='music-container'>
      <h1 className='titleA'>Albums</h1>
      <div className='albums'>
        <div className='anAlbum'>
          <img src='' />
          <h2></h2>
        </div>
        <div className='anAlbum'>
          <img src='' />
          <h2></h2>
        </div>
        <div className='anAlbum'>
          <img src='' />
          <h2></h2>
        </div>
        <div className='anAlbum'>
          <img src='' />
          <h2></h2>
        </div>
      </div>
      <h1 className='titleB'>Extended Plays</h1>
      <div className='eps'>
        <div className='anEp'><img src='' />
          <h2></h2>
          </div>
        <div className='anEp'><img src='' />
          <h2></h2>
          </div>

      </div>
    </div>
  )
}

export default Music
