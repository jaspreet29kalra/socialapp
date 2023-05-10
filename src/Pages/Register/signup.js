import React, { useState } from 'react'
 import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux'
import "./signup.css";
// import { signup } from '../../Component/ReduxContainer/apiCall';
// import app from '../../firebase';
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
export default function Signup() {

  const [email , setEmail] = useState('email');
  const [phonenumber , setphonenumber] = useState('Phonenumber');
  const [username , setusername] = useState('Username');
  const [password , setpassword] = useState('******');
  const [file , setfile] = useState(null);

 
 
  const handleClick = (e)=>{
    e.preventDefault();

  }
  return (
    <div className='mainContainerForsignup'>
        <div className='submainContainer'> 
         <div style={{flex:1 , marginLeft:150  , marginBottom:"170px"}}> *
           <p className='logoText'>Soc<span className='part'>ial</span></p>
           <p className='introtext'>Connect with your <span className='part'>family and friends </span></p>
         </div>
         <div style={{flex:3}}>
           <p className='createaccountTxt'>Create New Account</p>
           <input type="file" name="file" className="fyl" id="file" onChange={(e)=>setfile(e.target.files[0])} />
           <input type="text" placeholder={username} onChange={(e)=>setusername(e.target.value)} className='inputText' />
           <input type="text" placeholder={phonenumber} onChange={(e)=>setphonenumber(e.target.value)} className='inputText' />
           <input type="email" name="" id="" placeholder={email} onChange={(e)=>setEmail(e.target.value)} className='inputText' />
           <input type="password" placeholder={password} name="" onChange={(e)=>setpassword(e.target.value)} id="" className='inputText' />
           <button className='btnforsignup' onClick={handleClick}>Signup</button>
           <Link to={"/login"}>
           <p style={{textAlign:'start' , marginLeft:"30.6%"}}>Already have a account</p>
           </Link>
         </div>
        </div> 
     </div>
  )
}
