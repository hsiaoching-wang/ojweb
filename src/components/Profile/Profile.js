import React from 'react'
import planet from './planet.png'
import './Profile.css';
function Profile() {
  return (
    <div className='proflie'>
            <div className='name'>
                <img src={planet} alt="" style={{position:"relative",left:"25%",width: "50px",height:"50px"}}/>
                <p> HsiaoChing</p>
            </div> 
            <div className='score'>
                <h4>Score</h4>
                <h4>1234</h4>
            </div>
            <div className='coin'>
                <h4>Coin</h4>
                <h4>1234</h4>
            </div>
        </div>
  )
}

export default Profile