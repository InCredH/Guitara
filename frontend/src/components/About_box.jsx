import React from "react";
import About from "./About";
import "../pages/about/about.css"; 



function About_box(props){
    return (
        <div className="about-box">
            <img src={props.img}></img>
            <div className="about-head">
                <h3>{props.heading}</h3>
                <hr />
                <h5>{props.details}</h5>
            </div>
        </div>
    )
}

export default About_box;