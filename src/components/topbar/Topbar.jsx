import React from 'react';
import './topbar.css';
import {Person, Search, Chat, Notifications} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from '../dropdown/dropdown';


export default function Topbar(){
  const navigate = useNavigate();
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
              <input placeholder="Search for friends, posts, videos etc" className="searchInput" />


            </div>
        

          </div>
          <div className="topbarright">
            <div className="topbarlinks">
              <Link to="/"  className="topbarlinks">Home</Link >
              <span className="topbarlinks">Timeline</span>
              <Link to="/login" className="topbarlinks">Login</Link>
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
            <img src="\assets\Reji.jpg" alt="" className="topbarImg" onClick={()=>navigate("/profile")} />
         </div>
        </div>
    )
}