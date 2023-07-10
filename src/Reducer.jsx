import { getSecondsAgo } from "./functions/dateconverter";
export const initialState = {
    users:[],
    posts: [],
    filteredPosts : [],
    currentPost: [],
    filterType: '',
    currentUser: [],
    bookmarks: [],
    userFollowings: [],
    likedPosts: [],
}

const filteringPosts = (data,filterType) => {
    let updateFilteredPosts
    if(filterType === "trending"){
        updateFilteredPosts = [...data].sort((a,b) => b.likes.likeCount - a.likes.likeCount);
       
    }
    else{
        if(filterType === "recent"){
            updateFilteredPosts = [...data].sort((a,b) => getSecondsAgo(a.updatedAt) - getSecondsAgo(b.updatedAt))
        }
    }

    return updateFilteredPosts
}

export const reducer = (state, action) =>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                ...state,
                posts: action.payload.posts,
                filteredPosts: action.payload.posts,
                bookmarks: action.payload.bookmarks
            }
        case 'FETCH_USERS':
            return{
                ...state,
               users: action.payload.users,
               
            }
        case 'FILTER':
            return{
                ...state,
                filterType: action.payload,
                filteredPosts: filteringPosts(state.posts,action.payload)
            }
        case 'CURRENT_POST':
                return{
                    ...state,
                   currentPost: action.payload,
                }
        case 'CURRENT_USER':
                return{
                    ...state,
                   currentUser: action.payload,
                   
                 } 
        case 'USER_FOLLOWINGS':
            return{
                ...state,
                userFollowings: action.payload,
            } 
        case 'BOOKMARKS':
            return{
                    ...state,
                    bookmarks: action.payload,
                }  
        default:
            return state;
        
    }

}
