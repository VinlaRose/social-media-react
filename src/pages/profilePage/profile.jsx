import React, { useContext } from 'react'
import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';

import './profile.css';
import { AuthContext } from '../../Authentication/AuthContext';
export default function Profile(){
    const {user} = useContext(AuthContext)
    return(
        <div>
            
            <div className='belowTopbarProfile'>
            <div className="leftprofilebar">
            <Leftbar/>
            </div>
            <div className="rightprofileBar">
                <div className="rightprofileTop">
                <div className="profileCover">
                    <img src="assets/cover.jpg" alt="" className="coverPic" />
                    <img src="assets/profile.jpg" alt="" className="profilepic" />
                </div>
            
                </div>
                <div className="profileInfo">
                    {
                        user.foundUser ? <h2 className="name">{user.foundUser.firstName}</h2> : <h2 className="name">{user.createdUser.firstName}</h2>
                    }
                    
                    <span className="profielBio">Hi Friends!!</span>
                </div>

                <div className="rightProfileBottom">
                <>
                <div className="profile-feed">
                <Feed/>

                </div>
                
                <div className="profile-rightbar">
                <Rightbar profile/>

                </div>
                
                </>
                </div>

            </div>
            </div>
            
        </div>
    )
}