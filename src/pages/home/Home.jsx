import React from 'react';
import "./home.css"


import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';

export default function Home(){
    return(
        <>
        <div>
           
            
            <div className='homeContainer'>
            <div className="leftbar-container">
                <Leftbar/>

            </div>
            <div className="homeFeedContainer">
            <Feed/>

            </div>
            
            <div className="rightbar-container">
            <Rightbar/>
            </div>
            
            </div>
            
           
            
        </div>
        </>

    )
}