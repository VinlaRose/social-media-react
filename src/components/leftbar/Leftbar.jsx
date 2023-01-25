import React from 'react';
import "./leftbar.css";
import { RssFeed, Chat, Groups, Work, QuestionMark, Event, MenuBook, Bookmark} from '@mui/icons-material';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
export default function Leftbar(){
    return(
        <div className="leftBarContainer">
            <div className="leftbarwrapper">
                <ul className="leftbaritemlist">
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
                    <li className="leftbaritem">
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


                <button className="moreButton">Show More</button>
                <hr className='hrline'/>

                <ul className="friendsList">
                    <li className="friendsonline">
                        <img src="./assets/Sam.jpg" alt="" className="friendsImage" />
                        <span className="friendsName">Sam Sarma</span>
                    </li>
                    <li className="friendsonline">
                        <img src="./assets/Sam.jpg" alt="" className="friendsImage" />
                        <span className="friendsName">Sam Sarma</span>
                    </li>
                    <li className="friendsonline">
                        <img src="./assets/Sam.jpg" alt="" className="friendsImage" />
                        <span className="friendsName">Sam Sarma</span>
                    </li>
                    <li className="friendsonline">
                        <img src="./assets/Sam.jpg" alt="" className="friendsImage" />
                        <span className="friendsName">Sam Sarma</span>
                    </li>
                    <li className="friendsonline">
                        <img src="./assets/Sam.jpg" alt="" className="friendsImage" />
                        <span className="friendsName">Sam Sarma</span>
                    </li>
                    <li className="friendsonline">
                        <img src="./assets/Sam.jpg" alt="" className="friendsImage" />
                        <span className="friendsName">Sam Sarma</span>
                    </li>
                    <li className="friendsonline">
                        <img src="./assets/Sam.jpg" alt="" className="friendsImage" />
                        <span className="friendsName">Sam Sarma</span>
                    </li>
                    <li className="friendsonline">
                        <img src="./assets/Sam.jpg" alt="" className="friendsImage" />
                        <span className="friendsName">Sam Sarma</span>
                    </li>
                    <li className="friendsonline">
                        <img src="./assets/Sam.jpg" alt="" className="friendsImage" />
                        <span className="friendsName">Sam Sarma</span>
                    </li>
                </ul>

            </div>
        </div>
    )
}