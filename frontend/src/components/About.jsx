import React from 'react';

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <video src={props.video} autoPlay loop muted/>
                </div>
                <div className='about-text'>
                    <h2>{props.title}</h2>
                    <p>It’s never too early - or too late - to learn to play an instrument. With our interactive step-by-step lessons, you’ll discover something new every time you play the songs you love.</p>
                    <button>{props.button}</button>
                </div>
        </div>
    );
}

export default About;