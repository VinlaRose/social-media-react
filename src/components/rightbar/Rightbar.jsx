import React from 'react';
import "./rightbar.css";

export default function Rightbar(){
    return(
        
            <div className="rightBarContainer">
                <div className="rightBarWrapper">
                    <div className="bdayMsg">
                        <img src="assets/gift.jpg" alt="" className="bdayIcon" />
                        <span className="bdayText"><b>Veronica</b> and <b>3 others </b>have their bday today.</span>
                    </div>
                    <div className="adBox">
                        <img src="assets/add1.jpg" alt="" className="adImg" />
                    </div>
                    <h4 className='onlineFrndsHeading'>Online Friends</h4>
                    <ul className="ListonlineFriends">
                        <li className="onlineFriend">
                            <div className="profileImageContainer">
                                <img src="assets/alice.jpg" alt="" className="onlineFriendProfilepic"/>
                                <span className="onlinebadge"></span>

                            </div>
                            
                            <span className="onlineFriendName">Alice Dsouza</span>
                        </li>
                    </ul>
                    
                </div>
            </div>
        
    )
}