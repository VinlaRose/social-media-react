import React from 'react';
import "./share.css";
import "../../components/commonstyle.css"
import {PermMedia, LocationOn, Loyalty, EmojiEmotions} from '@mui/icons-material';

export default function Share(){
    return(
        <div className="shareContainer">
            <div className="shareTopbar">
                <img src="assets\Reji.jpg" alt="" className="shareprofileImage" />
                <input placeholder="What's in your mind?" type="text" className="writePost"/>

            </div>
            <hr className='hrline'/>
            <div className="shareBottombar">
                <div className="postOptions">
                    <PermMedia className='postIcon'/>
                    <span className="postOptionName">Video or Photo</span>
                </div>
                <div className="postOptions">
                    <LocationOn className='postIcon'/>
                    <span className="postOptionName">Location</span>
                </div>
                <div className="postOptions">
                    <Loyalty className='postIcon'/>
                    <span className="postOptionName">Tag</span>
                </div>
                <div className="postOptions">
                    <EmojiEmotions className='postIcon'/>
                    <span className="postOptionName">Feelings</span>
                </div>
                <div className="postOptions">
                <button className='shareButton'>Share</button>
                </div>
                

            </div>
        </div>
    )
}