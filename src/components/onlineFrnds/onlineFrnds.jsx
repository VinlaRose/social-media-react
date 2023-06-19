import React from 'react';
import "./onlineFrnds.css";
import { useNavigate } from 'react-router-dom';


export default function OnlineFrnds({user}){
    const navigate = useNavigate()
    const {_id} =user

    const goToUserProfile = () => {
        navigate(`/peopleprofile/${_id}`)
    }
    return(
        <div>
            
                        <li className="friendsonline" onClick={goToUserProfile}>
                            <div className="imageContainerOnline">
                                <img src={user.profilePicture} alt="" className="friendsImage" />
                                <span className="onlinebadge"></span>

                            </div>
                        
                            <span className="friendsName">{user.firstName}</span>
                        </li>
                        
                    
        </div>
    )
}