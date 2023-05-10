import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import ProfileLeftbar from '../../Component/ProfileLeftsidecontainer/ProfileLeftbar'
import ProfileMainPost from '../../Component/ProfileMainPostContainer/ProfileMainPost'

import "./profile.css"
import ProfileRightbar from '../../Component/ProfileRightsideContainer/ProfileRightbar'
export default function Profile() {
  return (
    <div className='ProfileContainer'>
          <Navbar/>
          <div className='subProfileContainer'>
                    <ProfileLeftbar/>
                    <ProfileMainPost/>
                    <ProfileRightbar/>
                  
         </div>
    </div>
  )
}
