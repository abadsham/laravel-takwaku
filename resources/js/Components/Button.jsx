import React from 'react'
import "../../css/button.css";

export default function Button({ play, isPlaying }) {
  return (
    <div className='btn-container'>
      <div onClick={play} className={isPlaying ? 'btn-stop' : 'btn-play'}></div>
    </div>
  )
}
