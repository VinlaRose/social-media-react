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
              <Search/>
              <input placeholder="Search for friends, posts etc" className="searchInput" />


            </div>
        

          </div>
          <div className="topbarright">
            <div className="topbarlinks">
              <span className="topbarlink">Home</span>
              <span className="topbarlink">Timeline</span>
            </div>
            <div className="topbaricons">
              <div className="topbariconitem">
                <Person/>
                <span className="topbariconbadge">1</span>
              </div>
              <div className="topbariconitem">
                <Chat/>
                <span className="topbariconbadge">1</span>
              </div>
              <div className="topbariconitem">
                <Notifications/>
                <span className="topbariconbadge">1</span>
              </div>
            </div>
            <img src="/assets/Reji.jpg" alt="vin" className="topbarImg" />
            
          </div>
        </div>
    )
}