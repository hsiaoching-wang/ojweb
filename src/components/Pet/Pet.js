import React from 'react'
import './Pet.css'
import egg1 from "./egg1.png"
import egg2 from "./egg2-1.png"
import egg3 from "./egg3.png"
import egg4 from "./egg4.png"

function Pet() {
  return (
    <div className='pet'>
      <div>
        <h3>Pet Name</h3> 
        <h3>Pet level</h3>
      </div>
      <img src={egg4} alt=""/>
      <div>
        <button>Feed</button>
        <button>composed</button>
        <button>active</button>
      </div>
    </div>
  )
}

export default Pet