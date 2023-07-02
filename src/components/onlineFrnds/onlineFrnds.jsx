import React, { useContext, useEffect } from 'react';
import "./onlineFrnds.css";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthContext';
import { PostDataContext } from '../../Data/posts';


export default function OnlineFrnds({user}){
    const navigate = useNavigate();
    const {encodedToken} = useContext(AuthContext);
    const {getData, getUsersData, state, dispatch} = useContext(PostDataContext)
    
    const {_id} =user

    const goToUserProfile = () => {
        navigate(`/peopleprofile/${_id}`)
    }
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

    

    useEffect(() => {
        console.log(state.userFollowings.map((item) => item.username))
    },[]);

    function elementExists(arr, element) {
        return arr.includes(element);
      }
    return(
        <div>
            
                        <li className="friendsonline" >
                            <div className="suggetedUserImage">
                            <div className="imageContainerOnline">
                                <img src={user.profilePicture} alt="" className="friendsImage" />
                                <span className="onlinebadge"></span>

                            </div>

                            </div>
                           
                        
                            <span onClick={goToUserProfile} className="friendsName">{user.firstName}</span>
                            <button onClick={() => clickFollow(user._id)} className='followBtn button-5'>
                                {
                                    elementExists()
                                }
                            </button>
                        </li>
                        
                    
        </div>
    )
}