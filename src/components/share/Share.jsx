import React, { useContext, useState } from 'react';
import "./share.css";
import "../../components/commonstyle.css"
import {PermMedia, LocationOn, Loyalty, EmojiEmotions} from '@mui/icons-material';
import { AuthContext } from '../../Authentication/AuthContext';
import { PostDataContext } from '../../Data/posts';

export default function Share(){
    const [content, setContent] = useState('');
    const {user} = useContext(AuthContext);
    const {encodedToken} = user;
    const {getData, getUsersData} = useContext(PostDataContext);
   
    const sharePostInputHandler = (e) => {
        setContent(e.target.value);
    }


    const shareButton = async () => {
        console.log(content);
        const contentss = { "content": content };
      
        const makePost = async () => {
          try {
            const response = await fetch("/api/posts", {
              method: 'POST',
              body: JSON.stringify({ postData: contentss }), // Wrap contentss in postData object
              headers: { authorization: encodedToken }
            });
            console.log(response);
          } catch (e) {
            console.error(e);
          }
        };
      
        await makePost(); // Wait for the API call to finish;
        getUsersData();
        getData();
      };
      
    


    return(
        <div className="shareContainer">
            <div className="shareTopbar">
                {
                    user.foundUser ? <img src={user.foundUser.profilePicture} alt="" className="shareprofileImage" /> : <img src={user.createdUser.profilePicture} alt="" className="shareprofileImage" />
                }
                
                <input placeholder="What's in your mind?" type="text" className="writePost" onChange={ sharePostInputHandler}/>

            </div>
            <hr className='hrline'/>
            <div className="shareBottombar">
                <div className="postOptions">
                    <PermMedia className='postIcon'/>
                    <span className="postOptionName">Video or Photo</span>
                </div>
                <div className="postOptions">
                    <LocationOn className='postIcon'/>
                    <span className="postOptionName">Location</span>
                </div>
                <div className="postOptions">
                    <Loyalty className='postIcon'/>
                    <span className="postOptionName">Tag</span>
                </div>
                <div className="postOptions">
                    <EmojiEmotions className='postIcon'/>
                    <span className="postOptionName">Feelings</span>
                </div>
                <div className="postOptions">
                <button className='shareButton' onClick={shareButton}>Share</button>
                </div>
                

            </div>
        </div>
    )
}