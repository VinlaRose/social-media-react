import React, { useContext } from 'react';
import "./feed.css";
import Share from '../share/Share';
import { PostDataContext } from '../../Data/posts';
import Post from '../post/Post';
import { FilterButtons } from '../filterButtons/filterbtns';




export default function Feed(){
    const {state} = useContext(PostDataContext);
    console.log(state)
    return(
        <div className="feedContainer">
            <Share/>
            <FilterButtons/>
           
            {state.filteredPosts.map(p=>
              <Post key = {p._id} post = {p}/>  )}
              
            
            
        </div>
    )
}