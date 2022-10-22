import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import Bottom from "./components/Bottom";
import "./index.css";
import "./style1.css";
import Tools from "./components/Tools";
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router";
import Login from "./components/Login";
import Home from "./pages/Home/Home";

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
      console.log("in else");
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
        </Routes>
        <Bottom />
      </div>
  );
}

export default App;