import React, { useContext, useState } from 'react';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';



import './profile.css';
import { AuthContext } from '../../Authentication/AuthContext';
import Share from '../../components/share/Share';
import Post from '../../components/post/Post';
import { PostDataContext } from '../../Data/posts';
import { Link } from 'react-router-dom';



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
      "https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=center",
      "https://cdn3.vectorstock.com/i/1000x1000/14/77/sikh-man-avatar-vector-25981477.jpg",
      "https://www.cliparts101.com/files/367/63BA654AECB7FD26A32D08915C923030/avatar_nick.png",
      "https://img.freepik.com/premium-vector/portrait-caucasian-woman-avatar-female-person-vector-icon-adult-flat-style-headshot_605517-26.jpg?w=2000",
      "https://st3.depositphotos.com/1007566/13175/v/600/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg",
      "https://static.vecteezy.com/system/resources/previews/021/687/858/non_2x/close-up-portrait-of-a-muslim-male-character-wearing-a-muslim-cap-kopiah-songkok-round-circle-avatar-icon-for-social-media-user-profile-website-app-line-cartoon-style-illustration-free-vector.jpg",
      "https://thumbs.dreamstime.com/b/woman-avatar-vector-illustration-cartoon-beautiful-girl-flat-design-style-avatar-business-woman-female-avatar-face-icon-bl-90994514.jpg",
      "https://st3.depositphotos.com/6697918/15699/v/450/depositphotos_156995430-stock-illustration-arab-muslim-woman-in-red.jpg"
      
     
    ];
  
    const handleAvatarChange = (avatar) => {
      setSelectedAvatar(avatar);
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



  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    setSelectedAvatar(URL.createObjectURL(uploadedImage))
    
  };

      
console.log(state.userFollowings.length)
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
                        user.foundUser ? <h2 className="name">{user.foundUser.firstName} {user.foundUser.lastName}</h2> : <h2 className="name">{user.createdUser.firstName} {user.createdUser.lastName}</h2>
                    }
                     <span className="profileUsername">@{currentUser.username}</span>
                    
                    <span className="profileBio">{currentUser.bio}</span>
                    <span className="profileLink"><Link>{currentUser.personalLink}</Link></span>
                    <button onClick={handleToggleModal}>Edit Profile</button>
                    <div className="social-media-stats">
      
      <div className="profileInfos">

      
      <div className='stats'>
        <strong>Followers</strong>
        <span>5</span>
      </div>
      <div className='stats'>
        <strong>Followings</strong>
        <span>{state.userFollowings.length}</span>
      </div>
      <div className='stats'>
        <strong>Posts</strong>
        <span>{userPosts.length}</span>
      </div>
      </div>
    </div>

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
     
      <div>
        <p className="heading">Select from the avatars below :</p>
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
      <div className="uploadImage">
        
        
            <div>
            <p className="heading">Or Upload here :</p>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {/* <button onClick={() => setImage(null)}>Remove Image</button> */}
      
    </div>
        
        
      </div>
    </div>
                    <form onSubmit={handleSubmit}>
                    <p className="heading">Edit your bio :</p>
                     <textarea className="resizable-input" type="text" value={bioText} onChange={handleBioChange} />
                     <p className="heading">Edit your personal website :</p>
                     <textarea className="resizable-input" type="text" value={link} onChange={handleLinkChange} />
                    {/* <button type="submit">Submit</button> */}
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