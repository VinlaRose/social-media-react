import React from 'react';
import "./feed.css";
import Share from '../share/Share';
import Post from '../post/Post'

export default function Feed(){
    return(
        <div className="feedContainer">
            <Share/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}