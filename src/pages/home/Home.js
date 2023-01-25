import React from 'react';
import "./home.css"

import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';

export default function Home(){
    return(
        <div>
            <>
            <Topbar/>
            <div className='homeContainer'>
            
            <Leftbar/>
            <Feed/>
            <Rightbar/>
            </div>
            
            </>
            
        </div>

    )
}