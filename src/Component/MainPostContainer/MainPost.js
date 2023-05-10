import React from 'react'
import "./mainPost.css";
import Post from '../ProfilePostContainer/Post';
import ContentPost from "../ContentPostContainer/ContentPost"

export default function MainPost() {

  
  
  return (
    <div className='mainPostContainer'>
      <ContentPost/>
      <Post/>
      <Post/>
      <Post/>
      
  
    </div>
  )
}
