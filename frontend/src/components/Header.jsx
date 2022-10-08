import React from 'react';
import video from '../video/home_vid.mp4';

function Header() {
  return (
    <div id='main'>
        <video src={video} autoPlay loop muted/>
        <div className='name'>
            <h1><span>Go where the Guitar takes you...</span></h1>    
        </div>
    </div>
  )
}

export default Header