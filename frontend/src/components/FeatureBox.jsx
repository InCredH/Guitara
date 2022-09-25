import React from 'react';
import Feature from './Feature';

function FeatureBox(props){
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image}/>
            </div>
            <div className='s-b-text'>
                <h2>{props.title}</h2>
                <p>{props.details}</p>
            </div>
        </div>
    );
}

export default FeatureBox;