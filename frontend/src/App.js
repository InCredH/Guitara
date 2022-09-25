import React from 'react';
import Header from "./components/Header";
import Feature from "./components/Feature";
import About from './components/About';
import aboutimage from './images/download.png';
import aboutimage1 from './images/download.png';


function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimage} title='Comes with all you need in your daily life' button='get the app'/>
    </div>
  );
}

export default App;
