import React, { useContext } from 'react';
import "./post.css";
import {MoreVert} from '@mui/icons-material';
import { useState } from 'react';
import { PostDataContext } from '../../Data/posts';
import { getTimeAgo } from '../../functions/dateconverter';

export default function Post({post}){
    const {state} = useContext(PostDataContext)
    
    const [like,setLike] = useState(1);
    const [isLiked,setIsLiked] = useState(false)
    
    const likeHandler =()=>{
        setLike(isLiked ? like -1 : like+1);
        setIsLiked(!isLiked)
        
    }

const userFirstName = (name) => {
    return state.users.find((item) => item.username === name)
}

const userProfile = (name) => {
    return state.users.find((item) => item.username === name)
}




    

    return(
        <div className="postContainer">
            <div className="wrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                    <img src={
                            userProfile(post.username).profilePicture
                        } alt="" className="postProfile" />
                    <span className="postProfileName">
                        {
                            userFirstName(post.username).firstName
                        }
                    </span>
                    <span className="postDate">{
                    getTimeAgo(post.updatedAt)
                    }</span>
                    </div>
                    <MoreVert/>
                </div>
                <div className="postMiddle">
                <span className="postText">{post?.content}</span>
                    <img src = {post?.photo} alt="" className="postImage" />
                    
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.jpg" onClick={likeHandler} alt="" className="postButton"/>
                        {/* <img src="assets/like.jpg"onClick={likeHandler}  alt="" className="postButton"/> */}
                        <span className="likeCount">{post.likes.likeCount}</span>
                    </div>
                    <div className="postBottomRight">9 comments
                    </div>
                </div>
            </div>
        </div>
    )
}