import React, { useContext } from 'react';
import "./post.css";
import { PostDataContext } from '../../Data/posts';
import { getTimeAgo } from '../../functions/dateconverter';
import OptionsComponent from '../dotMenu/dotMenu';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { AuthContext } from '../../Authentication/AuthContext';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

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

    const addToBookMarks = (id) => {
    console.log(id);

    const bookmarkPost = async () => {
        try {
          const response = await fetch(`/api/users/bookmark/${id}`, {
            method: 'POST',
            headers: { authorization: encodedToken }
          });
          console.log(response);
        } catch (e) {
          console.error(e);
        }
      };

      bookmarkPost();
    
      const getBookmarks = async () => {
        try{
            const bookmarkResponse = await fetch("/api/users/bookmark/" , {
                method: 'GET',
                headers: { authorization : encodedToken}
            });
            console.log(await bookmarkResponse.json());
        }catch(e){
            console.error(e)
        }
      };

      getBookmarks();

    }







    

    return(
        <div className="postContainer">
            <div className="wrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                    <img src={
                            userFirstName(post.username).profilePicture
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
                    <div className="postBottomCentre" 
                    onClick={() => addToBookMarks(post._id)}><BookmarkAddIcon/>
                    </div>
                    <div className="postBottomRight"><InsertCommentIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}