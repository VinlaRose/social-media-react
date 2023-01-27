import React from 'react';
import "./post.css";
import {MoreVert} from '@mui/icons-material';
import { Users } from '../../dummyData';

export default function Post({post}){
    console.log(post)
    return(
        <div className="postContainer">
            <div className="wrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                    <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="postProfile" />
                    <span className="postProfileName">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                    </div>
                    <MoreVert/>
                </div>
                <div className="postMiddle">
                <span className="postText">{post?.desc}</span>
                    <img src = {post.photo} alt="" className="postImage" />
                    
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.jpg" alt="" className="postButton"/>
                        <img src="assets/like.jpg" alt="" className="postButton"/>
                        <span className="likeCount">{post.like} people liked</span>
                    </div>
                    <div className="postBottomRight">{post.comment} comments
                    </div>
                </div>
            </div>
        </div>
    )
}