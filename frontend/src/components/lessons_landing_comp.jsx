import React from "react";
import "../pages/Lessons-landing-page/lessons.css";
import note_image from "../images/lessons-landing-note.svg";
import Lessons_main from "./Lessons_main";

function lessons_landing_comp() {
  return (
    <div className="blue-body">
      <Lessons_main title = "Music Theory Lessons" img = {note_image}/>
    </div>
  );
}

export default lessons_landing_comp;
