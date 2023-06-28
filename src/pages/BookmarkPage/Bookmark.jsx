import React from 'react';
import "../home/home.css"
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';
import BookmarkFeed from './BookmarkFeed';

export default function Bookmarks(){
    return(
        <>
        <div>
           
            
            <div className='homeContainer'>
            <div className="leftbar-container">
                <Leftbar/>

            </div>
            <div className="homeFeedContainer">
            <BookmarkFeed/>

            </div>
            
            <div className="rightbar-container">
            <Rightbar/>
            </div>
            
            </div>
            
           
            
        </div>
        </>

    )
}