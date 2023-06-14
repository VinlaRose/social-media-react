import React, { useContext } from 'react';
import "./post.css";
import {MoreVert} from '@mui/icons-material';
import { useState } from 'react';
import { PostDataContext } from '../../Data/posts';
import { getTimeAgo } from '../../functions/dateconverter';
import OptionsComponent from '../dotMenu/dotMenu';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { AuthContext } from '../../Authentication/AuthContext';

export default function Post({post}){
    const {state, getData} = useContext(PostDataContext);
    const {user} = useContext(AuthContext);
    const {encodedToken} = user;
    
    
    const likeHandler =(id)=>{
       console.log(id);
       const likePost = async () => {
        try {
          const response = await fetch(`/api/posts/like/${id}`, {
            method: 'POST',
            headers: { authorization: encodedToken }
          });
          console.log(response);
        } catch (e) {
          console.error(e);
        }
      };

      likePost();
      getData();
        
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
                    <div className="dots"><OptionsComponent  id={post._id}/></div>
                    
                </div>
                <div className="postMiddle">
                <span className="postText">{post?.content}</span>
                    <img src = {post?.photo} alt="" className="postImage" />
                    
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUpAltIcon onClick={() => likeHandler(post._id)}/>
                       
                        <span className="likeCount">{post.likes.likeCount}</span>
                    </div>
                    <div className="postBottomRight">9 comments
                    </div>
                </div>
            </div>
        </div>
    )
}