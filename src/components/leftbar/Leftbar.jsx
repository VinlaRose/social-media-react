import React from 'react';
import "./leftbar.css";
import { Home, Login,Timeline, RssFeed, Chat, Groups, Work, QuestionMark, Event, MenuBook, Bookmark} from '@mui/icons-material';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { useNavigate } from 'react-router-dom';



export default function Leftbar(){
    const navigate = useNavigate();
    return(
        
        <div className="leftBarContainer">
            <div className="leftbarwrapper">
                <ul className="leftbaritemlist">

               
                <li className="leftbaritem" onClick={() => navigate("/")}>
                        <Home className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Home</span>
                    </li>


                    <li className="leftbaritem"  onClick={() => navigate("/login")} >
                        <Login className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Login</span>
                    </li>
                    

                    <li className="leftbaritem">
                        <Timeline className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Timeline</span>
                    </li>
                    <li className="leftbaritem">
                        <RssFeed className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Feed</span>
                    </li>
                    <li className="leftbaritem">
                        <Chat className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Chats</span>
                    </li>
                    <li className="leftbaritem">
                        <OndemandVideoIcon className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Videos</span>
                    </li>
                    <li className="leftbaritem">
                        <Groups className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Groups</span>
                    </li>
                    <li className="leftbaritem" onClick={() => navigate("/bookmarks")}>
                        <Bookmark className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Bookmarks</span>
                    </li>
                    <li className="leftbaritem">
                        <QuestionMark className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Questions</span>
                    </li>
                    <li className="leftbaritem">
                        <Work className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Jobs</span>
                    </li>
                    <li className="leftbaritem">
                        <Event className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Events</span>
                    </li>
                    <li className="leftbaritem">
                        <MenuBook className="leftbaritemicons"/>
                        <span className="leftbaritemnames">Courses</span>
                    </li>
                </ul>


                {/* <button className="moreButton">Show More</button> */}
                <hr className='hrline'/>

                {/* <ul className="friendsList">
                {Users.map(u=>
              <FriendsList key = {u.id} user = {u}/>  )}
                    
                    
                </ul> */}

            </div>
        </div>
    )
}