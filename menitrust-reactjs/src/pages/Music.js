import React from 'react'
import '../styles/Music.css'

function Music() {
  return (
    <div className='music-container'>
      <h1 className='titleA'>Albums</h1>
      <div className='albums'>
        <div className='anAlbum'>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/album/1vYB8mYSGiKxE5C2RGjfDP?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className='anAlbum'>
          <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/1zAmMlu6tYriPRdobmejRa?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div className='anAlbum'>
          <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/4W4gNYa4tt3t8V6FmONWEK?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div className='anAlbum'>
          <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/2KvYBT9dffNfJqqsLLHyAR?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div className='anAlbum'>
          <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/2KNruTzom06IP2Af6pDLTN?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
      <h1 className='titleB'>Extended Plays</h1>
      <div className='eps'>
        <div className='anEp'><img src='' />
          <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/1XDMRGqkkBwQYLgNKCGFlt?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div className='anEp'><img src='' />
          <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/4suzIGS4r9TZJrxR8SBOYF?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div className='anEp'><img src='' />
          <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/7mUYDBqNiddmKxuKrnBEKQ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div className='anEp'><img src='' />
          <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/5zV9Kwq0WDSPshNbvG418a?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
      <div className='seeMore'><a href='https://open.spotify.com/artist/3zmfs9cQwzJl575W1ZYXeT?si=ypQ6kO9uQEaVyZ5aKW-9rg' target='_blank'><h2>See More.</h2></a></div>
    </div >
  )
}

export default Music
