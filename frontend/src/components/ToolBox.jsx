import React from 'react';
import Tools from './Tools';

function ToolBox(props){
    return (
        <div className='t-box'>
            <div className='t-b-img'>
                <img src={props.image}/>
            </div>
            <div className='s-b-text'>
                <h2>{props.title}</h2>
                <p>{props.details}</p>
            </div>
        </div>
    );
}

export default ToolBox;