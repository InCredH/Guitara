import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import exercises_vid from "./video/exercises_vid.mp4";
import Bottom from "./components/Bottom";
import "./index.css";
import "./style1.css";
import Tools from "./components/Tools";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Header />
            <Feature />
            <About
              video={exercises_vid}
              title="Joyful Moments Together"
              button="Community"
            />
          </Route>
          <Route exact path="/tools">
            <Tools />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
        <Bottom />
      </div>
      
    </Router>
  );
}

export default App;
