import React from 'react'
import './login.scss'
import { useEffect, useState } from "react";

function Login(props) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const {getMsg} = props;
    const msg = {
        user: user,
        password: password
    };
  return (
    <div className='login'>
        <div className='box'>
            <h2>Login</h2>
            <input type="text" onChange={(e)=>setUser(e.target.value)}></input>
            <input type="password" onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={()=>getMsg(msg)}>Log in</button>
        </div>
    </div> 
  )
}

export default Login