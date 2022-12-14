import React from "react";
import { useState, useEffect } from "react";
import Bottom from "./components/Bottom";
import "./index.css";
import Tools from "./pages/Tools/Tools";
import Navbar from "./components/Navbar";
import Community_landing from "./components/Community_landing";
import {Routes, Route} from "react-router";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Lessons_landing from "./pages/Lessons-landing-page/lessons_landing";
import About from "./pages/about/Aboutpg";
import Community_home from "./pages/Community/Comunity_home";
import Notes_Lessons from "./pages/Notes-lessons/Notes_lessons";
import C_post from "./pages/Createpost/C_post";
import Notes_Staff from "./pages/Notes-The-Staff/Notes_Staff";
import Notes_Clefs from "./pages/Notes-the-cleffs/Notes_Clefs";
import Notes_accidentals from "./pages/Notes-accidentals/Notes_accidentals";
import Notes_intervals from "./pages/Notes-intervals/Notes_intervals";
import Notes_scales from "./pages/Notes-scales/Notes_scales";
import Notes_chords from "./pages/Notes-chords/Notes_chords";
import Notes_keys from "./pages/Notes-keys/Notes_keys";
import Profile from "./pages/profile/profile_landing";
import Exercise from "./pages/Exercises/Exercise";
import jwt_decode from "jwt-decode";
import axios from "axios";

// import {ToastContainer} from "react-toastify"



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
      <div>
        <Navbar isAuthenticated={isAuthenticated} user={user}/>
        <Routes>
          <Route exact path="/" element={<Home isAuthenticated={isAuthenticated} />}></Route>
          <Route exact path="/tools" element={ <Tools isAuthenticated={isAuthenticated} />}></Route>
          <Route exact path="/login" element={<Login setIsAuthenticated={setIsAuthenticated}/>}></Route>
          <Route exact path="/lessons" element = {<Lessons_landing />}></Route>
          <Route exact path="/about" element = {<About />}></Route>
          <Route exact path="/community" element = {<Community_home />}></Route>
          <Route exact path="/lessons/notes" element = {<Notes_Lessons />}></Route>
          <Route exact path="/lessons/staff" element = {<Notes_Staff />}></Route>
          <Route exact path="/lessons/clefs" element = {<Notes_Clefs />}></Route>
          <Route exact path="/lessons/accidentals" element = {<Notes_accidentals />}></Route>
          <Route exact path="/lessons/intervals" element = {<Notes_intervals />}></Route>
          <Route exact path="/lessons/chords" element = {<Notes_chords />}></Route>
          <Route exact path="/lessons/scales" element = {<Notes_scales />}></Route>
          <Route exact path="/lessons/scales" element = {<Notes_scales />}></Route>
          <Route exact path="/lessons/keys" element = {<Notes_keys />}></Route>
          <Route exact path="/community/createpost" element = {<C_post />}></Route>
          <Route exact path="/community/profile" element = {<Profile />}></Route>
          <Route exact path="/exercises" element = {<Exercise />}></Route>
        </Routes>
        <Bottom />
      </div>
  );
}

export default App;
