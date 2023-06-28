import React, { useContext, useEffect } from 'react';
import "../../components/feed/feed.css"
import { PostDataContext } from '../../Data/posts';
import { AuthContext } from '../../Authentication/AuthContext';




export default function BookmarkFeed(){
    const {user} = useContext(AuthContext);

    // useEffect(() => {
    //     const getBookmarks = async () => {
    //         try{
    //             const bookmarkResponse = await fetch("/api/users/bookmark/" , {
    //                 method: 'GET',
    //                 headers: { authorization : user.encodedToken}
    //             });
    //             console.log(await bookmarkResponse.json());
    //             const bookmarks = await bookmarkResponse.json()
    //             console.log(bookmarks)
    //         }catch(e){
    //             console.error(e)
    //         }
    //       };

    // },[user.encodedToken])
    
    return(
        <div className="feedContainer">
            
            Bookmark feed
           
            {/* {state.filteredPosts.map(p=>
              <Post key = {p._id} post = {p}/>  )} */}
              
            
            
        </div>
    )
}