import React, { useContext, useState } from 'react';
import './topbar.css';
import {Person, Search, Chat, Notifications} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from '../dropdown/dropdown';
import { AuthContext } from '../../Authentication/AuthContext';
import { PostDataContext } from '../../Data/posts';


export default function Topbar(){
  const {user, logoutHandler} = useContext(AuthContext);
  
  const {state} = useContext(PostDataContext);
  
  const {encodedToken} = user;
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState('');

 

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    console.log(searchQuery)

    const filteredResults = state.users.filter((person) =>
      person.username.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
    console.log(searchResults)
  };
  const searchFriends = (id) =>{
    navigate(`/peopleprofile/${id}`);
    setSearchQuery('')
    
    

  }
    return(
        <div className = "topbarcontainer">
          <div className="topbarleft">
            <div className="dropdown-container">
            <Dropdown/>

            </div>
          
          <div className="logo">slaybook</div>
          </div>

          
          <div className="topbarcentre">
            <div className="searchbar">
              <Search className="searchbaricon"/>
             
              <input
              className="searchInput"
              type="text"
              placeholder="Search for people..."
              value={searchQuery}
              onChange={handleSearch}
            />
   {searchQuery.length > 0 && (
        <div className="search-results">
          {searchResults.map((item) => (
            <div key={item._id} className="result-item" onClick={() => searchFriends(item._id)}>
              {item.firstName} {item.lastName}

            </div>
          ))}
        </div>
      ) }

            </div>
        

          </div>
          <div className="topbarright">
            <div className="topbarlinks">
              <Link to="/"  className="topbarlinks">Home</Link >
              
            </div>
            <div className="topbaricons">
              <div className="topBarIconItem">
                <Person/>
                <span className="topbariconbadge">1</span>
              </div>
              <div className="topBarIconItem">
                <Chat/>
                <span className="topbariconbadge">1</span>
              </div>
              <div className="topBarIconItem">
                <Notifications/>
                <span className="topbariconbadge">1</span>
              </div>
            </div>


            {
              encodedToken && <div className="topBarIconItem"  >
                {
                  user.foundUser ? <p>{user.foundUser.firstName}</p> : <p>{user.createdUser.firstName}</p>
                }
              </div> 
            }

            {
              !encodedToken && <img src="\assets\blank-profile-picture.png" alt="" className="topbarImg" onClick={()=>navigate("/profile")} />

            }

            
           

            {
              
              encodedToken && <>  <img src={state.currentUser.profilePicture} alt="" className="topbarImg" onClick={()=>navigate("/profile")} /> <div className="topBarIconItem" onClick={logoutHandler} >Logout</div></>
            }

            
         </div>
        </div>
    )
}