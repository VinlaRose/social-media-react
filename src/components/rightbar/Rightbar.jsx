import React from 'react';
import "./rightbar.css";

export default function Rightbar(){
    return(
        
            <div className="rightBarContainer">
                <div className="rightBarWrapper">
                    <div className="bdayMsg">
                        <img src="assets/gift.jpg" alt="" className="bdayIcon" />
                        <span className="bdayText"><b>veronica</b> and <b>3 others </b>have their bday today.</span>
                    </div>
                    <div className="adBox">
                        <img src="assets/add1.jpg" alt="" className="adImg" />
                    </div>
                </div>
            </div>
        
    )
}