import React from 'react';
import Header from "./components/Header";
import Feature from "./components/Feature";
import About from './components/About';
import exercises_vid from './video/exercises_vid.mp4';

import './index.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <h1 className='feature-head'>A place for you to <span>learn, practice </span>and <span>show off</span>..</h1>
      <Feature/>
      <About video={exercises_vid} title='Joyful Moments Together' button='Community'/>
    </div>
  );
}

export default App;
