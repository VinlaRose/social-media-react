
import "../../components/feed/feed.css";
import { useContext } from "react";
import { PostDataContext } from "../../Data/posts";
import Post from "../../components/post/Post";
import "./bookmark.css"





export default function BookmarkFeed(){
    
    const {state} = useContext(PostDataContext);
    

    const  filterObjectsById = 
         state.posts.filter(obj => state.bookmarks.includes(obj._id));
      

      

   
    
    return(
        <div className="feedContainer">
            <div className="bookmark-heading">
            <h2>Your Bookmarks</h2>
            </div>


            
            
           
            {filterObjectsById.map(p=>
              <Post key = {p._id} post = {p}/>  )}
              
            
            
        </div>
    )
}