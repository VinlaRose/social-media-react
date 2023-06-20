import React, { useContext } from 'react';
import "../feed/feed.css";
import Share from '../share/Share';
import { PostDataContext } from '../../Data/posts';
import Post from '../post/Post';
import { FilterButtons } from '../filterButtons/filterbtns';




export default function UserFeed({userposts}){
    const {state} = useContext(PostDataContext);
    console.log(userposts);
  
    
    return(
        <div className="feedContainer">
            <Share/>
            
           
            {state.filteredPosts.map(p=>
              <Post key = {p._id} post = {p}/>  )}
              
            
            
        </div>
    )
}