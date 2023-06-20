import React, { useContext } from 'react';
import '../profilePage/profile.css';
import { useParams } from "react-router-dom"
import { AuthContext } from '../../Authentication/AuthContext';
import { PostDataContext } from '../../Data/posts';
import Rightbar from '../../components/rightbar/Rightbar';
import Leftbar from '../../components/leftbar/Leftbar';
import UserFeed from '../../components/userFeed/UserFeed';
import Share from '../../components/share/Share';
import Post from '../../components/post/Post';



export const UserPage = () =>{
    const {state} = useContext(PostDataContext)
    const {_id} = useParams();
    console.log(state.users)
    const userProfileRequired = state.users.find((item) => item._id === _id)
    console.log(userProfileRequired);
    const userPosts = state.posts.filter((item) => item.username === userProfileRequired.username);
    console.log("user posts", userPosts)
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