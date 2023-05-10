import React, { useState } from 'react'
import "./contentpost.css";
import imageIcon from "../Images/gallery.png"
import emojiIcon from "../Images/cat-face.png"
import VideoIcon from "../Images/video.png"
import profileimage from "../Images/Profile.png"

export default function ContentPost() {
  const [title , setTile] = useState('Write your real thought.....');
  const handlePost = (e)=>{
    e.preventDefault(); 
  }

  return (
    <div>
      <div className='ContentUploadContainer'>
        <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
          <img src={`${profileimage}`} className="profileimage" alt="" />
          <input type="text" className='contentWritingpart' placeholder={title}  onChange={(e)=>setTile(e.target.value)} />
         </div>

        <div style={{marginLeft: '10px' }}>
          <div>
            <img src={`${imageIcon}`} className="icons" alt="" />
            <img src={`${emojiIcon}`} className="icons" alt="" />
            <img src={`${VideoIcon}`} className="icons" alt="" />
            <button style={{height:"35px" ,marginLeft:"20px" ,marginBottom:"3px",marginRight:"12px",marginTop:"40px", paddingLeft:"20px" , paddingRight:"20px" , paddingTop:6 , paddingBottom:6 , border:"none" , backgroundColor:"black" , color:"white" , borderRadius:"5px" , cursor:"pointer", onClick:{handlePost}}}>Post</button>
           
          </div>
        </div>
      </div>

      
     </div>
  )
}
