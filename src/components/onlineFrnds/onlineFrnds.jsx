import React from 'react';
import "./onlineFrnds.css";
import { useNavigate } from 'react-router-dom';


export default function OnlineFrnds({user}){
    const navigate = useNavigate();
    
    const {_id} =user

    const goToUserProfile = () => {
        navigate(`/peopleprofile/${_id}`)
    }
    const clickFollow = (id) => {
        console.log(id)
    }
    return(
        <div>
            
                        <li className="friendsonline" >
                            <div className="suggetedUserImage">
                            <div className="imageContainerOnline">
                                <img src={user.profilePicture} alt="" className="friendsImage" />
                                <span className="onlinebadge"></span>

                            </div>

                            </div>
                           
                        
                            <span onClick={goToUserProfile} className="friendsName">{user.firstName}</span>
                            <button onClick={() => clickFollow(user._id)} className='followBtn button-5'>Follow</button>
                        </li>
                        
                    
        </div>
    )
}