import React from 'react'
import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Topbar from '../../components/topbar/Topbar';
import './profile.css';
export default function Profile(){
    return(
        <div>
            <div className="topbarContainer">
            <Topbar/>

            </div>
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
                    <h2 className="name">Vinla Rose</h2>
                    <span className="profielBio">Hi Friends!!</span>
                </div>
                <div className="rightProfileBottom">
                <>
                <Feed/>
                <Rightbar profile/>
                </>
                </div>

            </div>
            </div>
            
        </div>
    )
}