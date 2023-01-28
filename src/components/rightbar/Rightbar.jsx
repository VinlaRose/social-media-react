import React from 'react';
import "./rightbar.css";
import OnlineFrnds from '../onlineFrnds/onlineFrnds';
import { Users } from '../../dummyData';


export default function Rightbar({profile}){

    
        const HomeRightBar = () => {
            return(
                <>
                <div className="bdayMsg">
                        <img src="assets/gift.jpg" alt="" className="bdayIcon" />
                        <span className="bdayText"><b>Veronica</b> and <b>3 others </b>have their bday today.</span>
                    </div>
                    <div className="adBox">
                        <img src="assets/add1.jpg" alt="" className="adImg" />
                    </div>
                    <h4 className='onlineFrndsHeading'>Online Friends</h4>

                    <ul className="friendsList">
                    {Users.map(u=>
              <OnlineFrnds key = {u.id} user = {u}/>  )}
                    </ul>
                        
                </>
            )
        }

        const ProfileRightBar = () => {
            return(
                <>
                <div className="profileuserinfo">
                <h2 className="profileuserinfohead">
                    About Me!
                </h2>
                <span className="userInfoItem">
                    Born on: 11 November 1998
                </span>
                
                <span className="userInfoItem">
                    Living in : Ludhiana
                </span>
                <span className="userInfoItem">From: Kerala, India</span>
                <span className="userInfoItem">
                    Relationship Status: Committed
                </span>
                <span className="userInfoItem">
                    Followers: 58
                </span>

                </div>
                <h2 className="profileuserinfohead">
                    Friends
                </h2>
                <div className="profileRightBarFrndsContainer">
                
                <div className="frndsnamePicProfileBar">
                    <img src="assets/profilepic.jpg" alt="" className="frndsPicProfileBar" />
                    <span className="frndnameProfileBar">Daniel Dsouza</span>
                </div>
                <div className="frndsnamePicProfileBar">
                    <img src="assets/profilepic.jpg" alt="" className="frndsPicProfileBar" />
                    <span className="frndnameProfileBar">Daniel Dsouza</span>
                </div>
                <div className="frndsnamePicProfileBar">
                    <img src="assets/profilepic.jpg" alt="" className="frndsPicProfileBar" />
                    <span className="frndnameProfileBar">Daniel Dsouza</span>
                </div>
                <div className="frndsnamePicProfileBar">
                    <img src="assets/profilepic.jpg" alt="" className="frndsPicProfileBar" />
                    <span className="frndnameProfileBar">Daniel Dsouza</span>
                </div>
                <div className="frndsnamePicProfileBar">
                    <img src="assets/profilepic.jpg" alt="" className="frndsPicProfileBar" />
                    <span className="frndnameProfileBar">Daniel Dsouza</span>
                </div>
                <div className="frndsnamePicProfileBar">
                    <img src="assets/profilepic.jpg" alt="" className="frndsPicProfileBar" />
                    <span className="frndnameProfileBar">Daniel Dsouza</span>
                </div>
                <div className="frndsnamePicProfileBar">
                    <img src="assets/profilepic.jpg" alt="" className="frndsPicProfileBar" />
                    <span className="frndnameProfileBar">Daniel Dsouza</span>
                </div>
                </div>
                
                </>
            )
        }


        return(    
            <div className="rightBarContainer">
                <div className="rightBarWrapper">
                    
                    <ProfileRightBar/>
                    
                </div>
            </div>
        
            )
}