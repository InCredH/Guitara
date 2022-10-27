import React from 'react';
// import ToolBox from './ToolBox';
// import squares from '../../images/lessons_landing_squares.svg';
import "./lessons.css";
import squares from "../../images/lessons-landing-squares.svg";


function Lessons_landing() {
  return (
    <div className = 'full_back'>
      <div className='main_back'>
        <div className='squares'>
          <img src={squares} alt=""/>
        </div>
        <h1>Music Theory Lessons</h1>
      </div>
    </div>
  )
}

export default Lessons_landing;