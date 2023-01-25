import React from 'react';
import "./post.css";
import {MoreVert} from '@mui/icons-material';

export default function Feed(){
    return(
        <div className="postContainer">
            <div className="wrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                    <img src="assets/Reji.jpg" alt="" className="postProfile" />
                    <span className="postProfileName">Reji Varghese</span>
                    <span className="postDate">5 mins ago</span>
                    </div>
                    <MoreVert/>
                </div>
                <div className="postMiddle">
                <span className="postText">Beauty!!</span>
                    <img src="assets/post2.jpg" alt="" className="postImage" />
                    
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.jpg" alt="" className="postButton"/>
                        <img src="assets/like.jpg" alt="" className="postButton"/>
                        <span className="likeCount">67 people liked</span>
                    </div>
                    <div className="postBottomRight">5 comments
                    </div>
                </div>
            </div>
        </div>
    )
}