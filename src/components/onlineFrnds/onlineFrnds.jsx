import React from 'react';
import "./onlineFrnds.css";
import { Users } from '../../dummyData';

export default function OnlineFrnds({user}){
    return(
        <div>
            
                        <li className="friendsonline">
                            <div className="imageContainerOnline">
                                <img src={user.profilePicture} alt="" className="friendsImage" />
                                <span className="onlinebadge"></span>

                            </div>
                        
                            <span className="friendsName">{user.username}</span>
                        </li>
                        
                    
        </div>
    )
}