import React from 'react'
import './Pet.css'
import egg from './egg1.png'

function Pet() {
  return (
    <div className='pet'>
      <h2>Pet</h2>
      <div>
        <img src={egg} alt="" />
      </div>
    </div>
  )
}

export default Pet