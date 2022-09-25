import React from 'react';

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.img} alt=''/>
                </div>
                <div className='about-text'>
                    <h2>{props.title}</h2>
                    <p>Once you complete the steps above, you'll start a new rule set with the CSS selector .center p to style the paragraph within the div. First, you want to define the display property as "inline-block" so the paragraph flows naturally inside the div.  Then set the line-height property to "normal" and the vertical-align property to "middle." This will ensure that the text inside the div is centered vertically, whether it's one line of text or multiple lines.</p>
                    <button>{props.button}</button>
                </div>
        </div>
    );
}

export default About;