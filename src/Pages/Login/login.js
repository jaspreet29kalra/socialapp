import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./login.css"
import { useState } from 'react';

export default function Login() {
  const [email , setemail]= useState('');
  const [password , setPassword] = useState('');
  const navigate=useNavigate();
const handleClick = (e)=>{
  e.preventDefault();
    navigate("/")
}
  return (
    <div className='mainContainerForsignup'>
      <div className='submainContainer'>
        <div style={{flex:1 , marginLeft:150  , marginBottom:"170px"}}>
          <p className='logoText'>Soc<span className='part'>ial</span></p>
          <p className='introtext'>Connect with your <span className='part'>family and friends </span></p>
        </div>
        <div style={{flex:3}}>
          <p className='createaccountTxt'>Login Account</p>
          <input type="email" name="" id="email" placeholder='Email' onChange={(e)=>setemail(e.target.value)} className='inputText' />
          <input type="password" placeholder='******' name="" onChange={(e)=>setPassword(e.target.value)} id="password" className='inputText' />
          <button className='btnforsignup' onClick={handleClick}>Login</button>
          <p style={{textAlign:'start' , marginLeft:"30.6%" }}>Forgot password</p>
          
          <Link to={"/signup"}>
          <p style={{textAlign:'start' , marginLeft:"30.6%" }}>Create New Account</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
