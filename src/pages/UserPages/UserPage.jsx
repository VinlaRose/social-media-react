import React, { useContext } from 'react';
import '../profilePage/profile.css';
import { useParams } from "react-router-dom"
import { AuthContext } from '../../Authentication/AuthContext';
import { PostDataContext } from '../../Data/posts';
import Rightbar from '../../components/rightbar/Rightbar';
import Leftbar from '../../components/leftbar/Leftbar';
import Post from '../../components/post/Post';



export const UserPage = () =>{
    const {state, dispatch, getUsersData, } = useContext(PostDataContext);
    const { encodedToken} = useContext(AuthContext)
    const {_id} = useParams();
    console.log(state.users)
    const userProfileRequired = state.users.find((item) => item._id === _id)
    console.log(userProfileRequired);
    const userPosts = state.posts.filter((item) => item.username === userProfileRequired.username);
    console.log("user posts", userPosts);
    const clickFollow = (id) => {
        console.log(id);
        const followFriend = async () => {
            try {
              const response = await fetch(`/api/users/follow/${id}`, {
                method: 'POST',
                headers: { authorization: encodedToken }
              });
              console.log(response);
              const requiredResponse = await response.json();
              console.log(requiredResponse.user.following);
              dispatch({type:'USER_FOLLOWINGS', payload: requiredResponse.user.following});
              

            } catch (e) {
              console.error(e);
            }
          };
        followFriend();
        getUsersData();
        
        
    
    }


    const clickUnFollow = (id) => {
        console.log(id);
        const unFollowFriend = async () => {
            try {
              const response = await fetch(`/api/users/unfollow/${id}`, {
                method: 'POST',
                headers: { authorization: encodedToken }
              });
              console.log(response);
              const requiredResponse = await response.json();
              console.log(requiredResponse.user.following);
              dispatch({type:'USER_FOLLOWINGS', payload: requiredResponse.user.following});
              

            } catch (e) {
              console.error(e);
            }
          };
        unFollowFriend();
        getUsersData();
        
        
    
    }

    

  

    function elementExists(arr, element) {
        return arr.includes(element);
      }
      
      
    return(
        <div >
            
            <div>
            
            <div className='belowTopbarProfile'>
            <div className="leftprofilebar">
            <Leftbar/>
            </div>
            <div className="rightprofileBar">
                <div className="rightprofileTop">
                <div className="profileCover">
                    <img src="https://images.unsplash.com/photo-1549074862-6173e20d02a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5kZXJ3YXRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="coverPic" />
                    <img src={userProfileRequired.profilePicture} alt="" className="profilepic" />
                </div>
            
                </div>
                <div className="profileInfo">
                    <h2 className="name">{userProfileRequired.firstName}</h2>
                    
                    <span className="profielBio">Hi Friends!!</span>
                    {
                                elementExists(state.userFollowings.map((item) => item.username), userProfileRequired.username) ? <button onClick={() => clickUnFollow(userProfileRequired._id)} className='followBtn button-5'>UNFOLLOW</button> : <button onClick={() => clickFollow(userProfileRequired._id)} className='followBtn button-5'>
                                FOLLOW
                                </button>
                    }
                     {/* <div className="social-media-stats">
      
       <div className="profileInfos">

      
      <div className='stats'>
        <strong>Followers</strong>
        <span>{userProfileRequired.followers.length}</span>
      </div>
      <div className='stats'>
        <strong>Followings</strong>
        <span>{userProfileRequired.userFollowings.length}</span>
      </div>
      <div className='stats'>
        <strong>Posts</strong>
        <span>{userPosts.length}</span>
      </div>
      </div> 
    </div> */}
                </div>

                <div className="rightProfileBottom">
                <>
                <div className="profile-feed">
                
                <div className="feedContainer">
                   
           
                    {userPosts.map(p=>
                    <Post key = {p._id} post = {p}/>  )}
              
            
            
                </div>

                </div>
                
                <div className="profile-rightbar">
                <Rightbar profile/>

                </div>
                
                </>
                </div>

            </div>
            </div>
            
        </div>


        </div>
    )
}