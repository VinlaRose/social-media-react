import React, { useContext } from 'react';
import "./post.css";
import { PostDataContext } from '../../Data/posts';
import { getTimeAgo } from '../../functions/dateconverter';
import OptionsComponent from '../dotMenu/dotMenu';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { AuthContext } from '../../Authentication/AuthContext';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { useNavigate } from 'react-router-dom';

export default function Post({post}){
    const {state,dispatch, getData} = useContext(PostDataContext);
    const {user} = useContext(AuthContext);
    const {encodedToken} = user;
    const navigate = useNavigate()
    
    
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
            
            const presentBookmarks = await bookmarkResponse.json();
            dispatch({type: 'BOOKMARKS', payload: presentBookmarks.bookmarks});

        }catch(e){
            console.error(e)
        }
      };

      getBookmarks();

    }

    const removeFromBookMarks = (id) => {
      const bookmarkPost = async () => {
        try {
          const response = await fetch(`/api/users/remove-bookmark/${id}`, {
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
            
            const presentBookmarks = await bookmarkResponse.json();
            dispatch({type: 'BOOKMARKS', payload: presentBookmarks.bookmarks});

        }catch(e){
            console.error(e)
        }
      };

      getBookmarks();
    }



    const goToProfile = (id) => {
      navigate(`/peopleprofile/${id}`);
    }



console.log(state.bookmarks)



    

    return(
        <div className="postContainer">
            <div className="wrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                    <img src={
                            userFirstName(post.username).profilePicture
                        } alt="" className="postProfile" onClick={() => goToProfile( userFirstName(post.username)._id)}/>
                    <span className="postProfileName">
                        {
                           userFirstName(post.username).firstName
                        }
                    </span>
                    <span className="postDate">{
                    getTimeAgo(post.updatedAt)
                    }</span>
                    </div>
                    {
                      userFirstName(post.username).firstName === state.currentUser.firstName && <div className="dots"><OptionsComponent  id={post._id}/></div>
                    }

                    
                    
                </div>
                <div className="postMiddle">
                <span className="postText">{post?.content}</span>
                    <img src = {post?.photo} alt="" className="postImage" />
                    
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <FavoriteBorderOutlinedIcon onClick={() => likeHandler(post._id)}/>
                       
                        <span className="likeCount">{post.likes.likeCount}</span>
                    </div>
                    
                    <div className="postBottomCentre" >
                    {
                      state.bookmarks?.includes(post._id) ? <BookmarkAddedOutlinedIcon onClick={() => removeFromBookMarks(post._id)}/>  : <BookmarkBorderOutlinedIcon onClick={() => addToBookMarks(post._id)}/>
                    }
                      
                    </div>
                    <div className="postBottomRight"><InsertCommentIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}