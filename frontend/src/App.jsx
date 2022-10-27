import React from "react";
import { useState, useEffect } from "react";
// import Header from "./components/Header";
// import Feature from "./components/Feature";
// import About from "./components/community_card";
import Bottom from "./components/Bottom";
import "./index.css";
import Tools from "./pages/Tools/Tools";
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Lessons_landing from "./pages/Lessons-landing-page/lessons_landing";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const user = localStorage.getItem("guitaraUser");
    if(user) {
      const user1 = JSON.parse(user);
      setUser(user1);
      setIsAuthenticated(true);
    }else {
      console.log("in else  of app.jsx");
    }
  },[isAuthenticated])

  console.log(user)
  
  return (
      <div className="App">
        <Navbar isAuthenticated={isAuthenticated} user={user}/>
        <Routes>
          <Route exact path="/" element={<Home isAuthenticated={isAuthenticated} />}></Route>
          <Route exact path="/tools" element={ <Tools isAuthenticated={isAuthenticated} />}></Route>
          <Route exact path="/login" element={<Login setIsAuthenticated={setIsAuthenticated}/>}></Route>
          <Route exact path="/lessons-landing-page" element = {<Lessons_landing />}></Route>
        </Routes>
        <Bottom />
      </div>
  );
}

export default App;
