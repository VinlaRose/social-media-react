import React from 'react';
import './topbar.css';
import {Person, Search, Chat, Notifications} from '@mui/icons-material';

export default function Topbar(){
    return(
        <div className = "topbarcontainer">
          <div className="topbarleft">
            <span className="logo">slaybook</span>
          </div>
          <div className="topbarcentre">
            <div className="searchbar">
              <Search className="searchbaricon"/>
              <input placeholder="Search for friends, posts, videos etc" className="searchInput" />


            </div>
        

          </div>
          <div className="topbarright">
            <div className="topbarlinks">
              <span className="topbarlinks">Home</span>
              <span className="topbarlinks">Timeline</span>
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
            <img src="\assets\Reji.jpg" alt="" className="topbarImg" />
            
          </div>
        </div>
    )
}