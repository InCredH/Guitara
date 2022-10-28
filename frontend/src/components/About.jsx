import React from "react";
import "../pages/about/about.css"; 
import About_box from "./About_box";
import creators from "../images/creators-abt.jpeg";
import mission from "../images/abt-img.jpeg";
import contact from "../images/company-abt.jpeg";

function About(){
    return(
        <div className="main">
            <div className="about-main">
                <h1>About Guitara</h1>
            </div>
            <div className="about-body">
            <div className="abt-bx header">
                <About_box img = {contact} details = "Get to know us and meet the people behind Musicca. Company." heading = "About company" ></About_box>
                <About_box img = {mission} details = "Read our mission statement and know more about our goals. Mission" heading = "Mission" ></About_box>
            </div>
            <div className="abt-bx">   
                <About_box img = {creators} details = "Get to know us and meet the people behind Musicca. Company." heading = "Contact" ></About_box>
                <About_box img = {creators} details = "Get to know us and meet the people behind Musicca. Company." heading = "Creators" ></About_box>
            </div>
        </div>
      </div>  
    )
}

export default About;