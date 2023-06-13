import { useContext } from 'react';
import './filterbtns.css'
import { PostDataContext } from '../../Data/posts';
import TrendingUpSharpIcon from '@mui/icons-material/TrendingUpSharp';
import FiberNewSharpIcon from '@mui/icons-material/FiberNewSharp';
export const FilterButtons  = () => {
    const {state,dispatch} = useContext(PostDataContext)

    const filterPosts = (e) => {
      
        dispatch({ type: 'FILTER', payload: e });
        
    }

    const colorChange = () => {
        if(state.filterType === "recent"){
            return "red"
        }else{
            return "black"
        }
    }



    return (
        <div className="sortPosts">
        <div className="trending" onClick={() => filterPosts("trending")}>
       
          <span className="centeredText" style={{color: state.filterType === "trending" ? "#fe3c72" : "black"}}> <span className='filterIcon'><TrendingUpSharpIcon/> </span>
          <span className='filterText'>Trending</span></span>
        </div>
        <div className="mostRecent" onClick={() => filterPosts("recent")}>
            
        <span className="centeredText" style={{color: state.filterType === "recent" ? "#fe3c72" : "black"}}> <span className='filterIcon'><FiberNewSharpIcon/> </span>
          <span className='filterText'>Recent</span></span>
        </div>
      </div>
    )
}