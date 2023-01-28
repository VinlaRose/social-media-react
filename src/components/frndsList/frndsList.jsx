import React from 'react'
import './frndsList.css'


export default function FriendsList({user}){
    return(
        <div>
            <li className="friendsonline">
                        <img src={user.profilePicture} alt="" className="friendsImage" />
                        <span className="friendsName">{user.username}</span>
                    </li> 
        </div>
    )
}