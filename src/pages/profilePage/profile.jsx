import React, { useContext, useState } from 'react'
import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';



import './profile.css';
import { AuthContext } from '../../Authentication/AuthContext';
import Share from '../../components/share/Share';
import Post from '../../components/post/Post';
import { PostDataContext } from '../../Data/posts';


export default function Profile(){
  
    const {user} = useContext(AuthContext);
    const current = user.foundUser ? user.foundUser : user.createdUser;
    
    
    const {encodedToken} = user;
    const {state, getUsersData, dispatch} = useContext(PostDataContext);
    const {currentUser} =state;
    
    console.log(state)
    const userPosts = state.posts.filter((item) => item.username === current.username);
    console.log(userPosts);
    
    const [showModal, setShowModal] = useState(false);
    const [bioText, setBioText] = useState('');
    const [link, setLink] = useState('');
    const [profile, setProfile] = useState("assets/Default-profile.png");

    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const avatarOptions = [
      "https://images.unsplash.com/photo-1634896941598-b6b500a502a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1635003913011-95971abba560?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      
      // Add more avatar options here
    ];
  
    const handleAvatarChange = (avatar) => {
      setSelectedAvatar(avatar);
    };
  
    const handleSave = () => {
      // Perform save operation with the selectedAvatar
      console.log('Saving avatar:', selectedAvatar);
      // You can make an API call or update the profile image in your desired way here
    };


    

    const handleToggleModal = () => {
        setShowModal(!showModal);
        setBioText(currentUser.bio);
        setLink(currentUser.personalLink);
        setProfile(currentUser.profilePicture)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
     
        console.log("bio",bioText);
        console.log("Link", link);
        console.log('Saving avatar:', selectedAvatar);
        
    
       
      };
    
      const handleBioChange = (event) => {
        setBioText(event.target.value);
      };
      const handleLinkChange = (event) => {
        setLink(event.target.value);
      };

      const handleEditing = (id) => {
        // Perform edit action here
        const editProfile = async () => {
            console.log(id)
            try {
              const response = await fetch(`/api/users/edit`, {
                method: 'POST',
                body: JSON.stringify({ userData: {bio: bioText, personalLink: link, profilePicture: selectedAvatar} }), 
                headers: { authorization: encodedToken }
              });
              
              const requiredResponse = await response.json();
              console.log(requiredResponse);
              dispatch({ type: 'CURRENT_USER', payload: requiredResponse.user });
              console.log(state)
              
            } catch (e) {
              console.error(e);
            }
          };
          editProfile();
          getUsersData();
          
          
        
       
    
        setShowModal(!showModal);
        setSelectedAvatar(null)
        
      };

      

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
                    {
                        user.foundUser ? <h2 className="name">{user.foundUser.firstName}</h2> : <h2 className="name">{user.createdUser.firstName}</h2>
                    }
                    
                    <span className="profielBio">About you: {currentUser.bio}</span>
                    <span className="profielBio">Link: {currentUser.personalLink}</span>
                    <button onClick={handleToggleModal}>Edit Profile</button>

                    {showModal && (
                    <div className="modal-overlay">
                     <div className="modal-content">
                    <h2>Edit Profile</h2>
                    <div>
      <img
        src={selectedAvatar || profile}
        alt="Profile Avatar"
        style={{ width: '200px', height: '200px' }}
      />
      <button onClick={handleSave}>Save</button>
      <div>
        {avatarOptions.map((avatar, index) => (
          <img
            key={index}
            src={avatar}
            alt={`Avatar ${index}`}
            style={{ width: '50px', height: '50px', margin: '5px' }}
            onClick={() => handleAvatarChange(avatar)}
          />
        ))}
      </div>
    </div>
                    <form onSubmit={handleSubmit}>
                     <textarea className="resizable-input" type="text" value={bioText} onChange={handleBioChange} />
                     <textarea className="resizable-input" type="text" value={link} onChange={handleLinkChange} />
                    <button type="submit">Submit</button>
                    </form>
                    <button onClick={() => handleEditing(currentUser._id)}>Done</button>
                    </div>
                    </div>
                    )}

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