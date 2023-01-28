import React from 'react';
import "./post.css";
import {MoreVert} from '@mui/icons-material';
import { Users } from '../../dummyData';
import { useState } from 'react';

export default function Post({post}){
    
    const [like,setLike] = useState(1);
    const [isLiked,setIsLiked] = useState(false)
    
    const likeHandler =()=>{
        setLike(isLiked ? like -1 : like+1);
        setIsLiked(!isLiked)
        
    }

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
                        <img src="assets/like.jpg" onClick={likeHandler} alt="" className="postButton"/>
                        {/* <img src="assets/like.jpg"onClick={likeHandler}  alt="" className="postButton"/> */}
                        <span className="likeCount">{like}likes</span>
                    </div>
                    <div className="postBottomRight">{post.comment} comments
                    </div>
                </div>
            </div>
        </div>
    )
}