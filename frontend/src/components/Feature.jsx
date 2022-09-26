import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage1 from '../images/home_com.jpg';
import featureimage2 from '../images/home_tools.jpg';
import featureimage3 from '../images/home_lessons.jpg';


function Feature() {
  return (
    <div id = 'features'>
        <div className = 'a-container'>
            <FeatureBox image = {featureimage1} title = 'Community' details = 'Learn together with our Guitara Community. Share your progress and show off your skills with others'/>
            <FeatureBox image = {featureimage2} title = 'Tools' details = 'To help you improve your Guitar skills, tune your guitar and play with the beats using our accurate tuner and metronome'/>
            <FeatureBox image = {featureimage3} title = 'Lessons and Exercises' details = 'It’s never too early - or too late - to learn to play an instrument. With our interactive step-by-step lessons, you’ll discover something new every time you play the songs you love.'/>

        </div>
    </div>
  )
}

export default Feature;