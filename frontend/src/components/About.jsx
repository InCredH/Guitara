import React from "react";
import "../pages/about/about.css"; 
import About_box from "./About_box";
import creators from "../images/harsh_profile.jpeg";
import mission from "../images/ayush_profile.jpeg";
import contact from "../images/vivek_profile.jpeg";

function About(){
    return(
        <div className="main">
            <div className="about-main">
                <h1>About Us</h1>
            </div>
            <div className="about-body">
            {/* <div className="abt-bx header">
                <About_box img = {contact} details = "Get to know us and meet the people behind Musicca. Company." heading = "About company" ></About_box>   
            </div> */}
            <h1>Creators</h1>
            <div className="abt-bx">  
                
                <About_box img = {mission} details = "CEO of Guitara" heading = "AYUSH BHANDARKAR" ></About_box> 
                <About_box img = {creators} details = "Backend Developer at Guitara" heading = "HARSH HEGISHTE" ></About_box>
                <About_box img = {contact} details = "Many things but mainly a guitar lover" heading = "VIVEK JAJU" ></About_box>
            </div>
        </div>
      </div>  
    )
}

export default About;