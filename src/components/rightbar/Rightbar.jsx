import React from 'react';
import "./rightbar.css";
import OnlineFrnds from '../onlineFrnds/onlineFrnds';
import { Users } from '../../dummyData';


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

                    <ul className="friendsList">
                    {Users.map(u=>
              <OnlineFrnds key = {u.id} user = {u}/>  )}
                    </ul>
                        
                    
                    
                </div>
            </div>
        
    )
}