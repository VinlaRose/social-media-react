import React, { useState } from 'react';
import "./dropdown.css"
import "../leftbar/leftbar.css"
import { useNavigate } from 'react-router-dom';
import {Home, Login, Group, Timeline, RssFeed, Chat, Groups, Work, QuestionMark, Event, MenuBook, Bookmark} from '@mui/icons-material';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate()

  return (
    
    <div>
      
      <div onClick={toggleDropdown} className="hamburger-icon">
          <div className="line"></div>
          <div className="line"></div>
         <div className="line"></div>
         </div>        
     
      {isOpen && (
        <div className="dropdown">
          <ul>
           
            
          <li className="leftbaritem" onClick={() => {navigate("/"); toggleDropdown()}}>
                        <Home className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Home</span>
                    </li>


                    <li className="leftbaritem"  onClick={() => {navigate("/login"); toggleDropdown()}} >
                        <Login className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Login</span>
                    </li>

                    <li className="leftbaritem" onClick={() => {navigate("/rightbar"); toggleDropdown()}} >
                        <Group className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Friends Online</span>
                    </li>


                    <li className="leftbaritem" onClick={() => { toggleDropdown()}}  >
                        <Timeline className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Timeline</span>
                    </li>
            <li className="leftbaritem">
                        <RssFeed className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Feed</span>
                    </li>
                    <li className="leftbaritem"  onClick={() => { toggleDropdown()}}>
                        <Chat className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Chats</span>
                    </li>
                    <li className="leftbaritem"  onClick={() => { toggleDropdown()}}>
                        <OndemandVideoIcon className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Videos</span>
                    </li>
                    <li className="leftbaritem"  onClick={() => { toggleDropdown()}}>
                        <Groups className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Groups</span>
                    </li>
                    <li className="leftbaritem"  onClick={() => { toggleDropdown()}}>
                        <Bookmark className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Bookmarks</span>
                    </li>
                    <li className="leftbaritem"  onClick={() => { toggleDropdown()}}>
                        <QuestionMark className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Questions</span>
                    </li>
                    <li className="leftbaritem"  onClick={() => { toggleDropdown()}}>
                        <Work className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Jobs</span>
                    </li>
                    <li className="leftbaritem"  onClick={() => { toggleDropdown()}}>
                        <Event className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Events</span>
                    </li>
                    <li className="leftbaritem"  onClick={() => { toggleDropdown()}}>
                        <MenuBook className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Courses</span>
                    </li>
          </ul>
        </div>
      )}
    
    </div>
  );
};

export default Dropdown;
