import React from 'react'
import "./Code.scss"
import { BiCodeAlt } from 'react-icons/bi';

function Code() {

  return (
    <div className='section'>
        <div className='question'></div>
        <div className='code'>
          <div className='writeCodebox'>
            <div className='writeCode'>
              <div>codeBox</div>
              <textarea name="" id="" cols="40" rows="15"></textarea>
            </div>
          </div>
          <div className='compilebox'></div>
        </div>
    </div>
  )
}

export default Code;