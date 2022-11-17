import React from "react";
import "../pages/Notes-lessons/Notes_lessons.css";
// import note_image from "../images/lessons-landing-note.svg";

function Notes() {
  return (
    
    <div className="orange-body">
        <div className="white-body">
            <div className="main-heading-div">
              <h2 className="main-heading">Notes</h2>
              <h4 className="main-heading-sub">In classical and popular music, especially from the Western world, there are twelve different notes. Seven of these notes are called the natural notes and they are represented by the white keys on the piano. The black keys on the piano represent the remaining five notes.</h4>
            </div>
            <div className="gray-contents-parent">
            <div className="gray-contents">
              <h3>Contents</h3>
              <ul className="list">
                <li>Natural Notes</li>
                <li>Middle C</li>
                <li>Octaves</li>
                <li>Half Steps and whole steps</li>
              </ul> 
            </div>
            </div>
        </div>
    </div>
  );
}

export default Notes;
