import React, { useContext } from 'react'
import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';


import './profile.css';
import { AuthContext } from '../../Authentication/AuthContext';
<<<<<<< Updated upstream
import Share from '../../components/share/Share';
import Post from '../../components/post/Post';
import { PostDataContext } from '../../Data/posts';
export default function Profile(){
    const {user, currentUser} = useContext(AuthContext);
    const {state} = useContext(PostDataContext)
    console.log("current uer posts:", currentUser );
    const userPosts = state.posts.filter((item) => item.username === currentUser.username);
=======
export default function Profile(){
    const {user} = useContext(AuthContext);
    
>>>>>>> Stashed changes
    return(
        <div>
            
            <div className='belowTopbarProfile'>
            <div className="leftprofilebar">
            <Leftbar/>
            </div>
            <div className="rightprofileBar">
                <div className="rightprofileTop">
                <div className="profileCover">
                    <img src="assets/cover.jpg" alt="" className="coverPic" />
                    <img src={currentUser.profilePicture} alt="" className="profilepic" />
                </div>
            
                </div>
                <div className="profileInfo">
<<<<<<< Updated upstream
                    {
                        user.foundUser ? <h2 className="name">{user.foundUser.firstName}</h2> : <h2 className="name">{user.createdUser.firstName}</h2>
                    }
=======
                {
                     user.foundUser ? <h2 className="name">
                     {user.foundUser.firstName} {user.foundUser.lastName}</h2> : <h2 className="name">
                        {user.createdUser.firstName} {user.createdUser.lastName}</h2>
                 }
>>>>>>> Stashed changes
                    
                    <span className="profielBio">Hi Friends!!</span>
                </div>

                <div className="rightProfileBottom">
                <>
                <div className="profile-feed">
                <div className="feedContainer">
                    <Share/>
            
           
                    {userPosts?.map(p=>
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
    )
}