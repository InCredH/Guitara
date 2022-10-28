import React from 'react';
import "./Notes_lessons.css";
import Notes from "../../components/Notes_lessons"
import Lessons_main from "../../components/Lessons_main"
import notes from "../../images/notes_1.png"


function Notes_Lessons() {
  return (
    <div>  
        {/* <Navbar /> */}
        <Lessons_main title = "Notes" img = {notes}/> 
        <Notes/>
    </div>
    
  )
}

export default Notes_Lessons;