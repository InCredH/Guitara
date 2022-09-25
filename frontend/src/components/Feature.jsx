import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage1 from '../images/feature_1.png';
import featureimage2 from '../images/feature_2.png';
import featureimage3 from '../images/feature_3.png';


function Feature() {
  return (
    <div id = 'features'>
        <div className = 'a-container'>
            <FeatureBox image = {featureimage1} title = 'Community' details = 'Learn together with our Guitara Community. Share your progress and show off your skills with others'/>
            <FeatureBox image = {featureimage2} title = 'Tools' details = 'Tune your guitar and play with the beats'/>
            <FeatureBox image = {featureimage3} title = 'Lessons and Exercises' details = ''/>

        </div>
    </div>
  )
}

export default Feature;