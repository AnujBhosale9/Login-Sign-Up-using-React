import React, { useState } from 'react'
import './LoginSignUp.css'
import user_icon from '../assets/person.png'
import email_icon from '../assets/gmail.png'
import password_icon from '../assets/pass.png'
const LoginSignUp = () => {

const[action,setAction]=useState("Login");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img id='im1' src={user_icon} alt="" />
                <input type="text" placeholder='User Name' />
            </div>}
            
            <div className="input">
                <img id='im2' src={email_icon} alt="" />
                <input type="email" placeholder='Email' />
            </div>
            <div className="input">
                <img id='im3' src={password_icon} alt="" />
                <input type="password" placeholder='Enter your password' />
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forget-password">Forget Password? <span>Click Here!</span></div>
        }
        <div className="submit-container">
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignUp