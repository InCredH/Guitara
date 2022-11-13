import React from 'react';
import "./Notes_chords.css";
import Notes from "../../components/Notes_lessons"
import Lessons_main from "../../components/Lessons_main"
import notes from "../../images/notes_1.png"
import {useState} from 'react';

function Notes_chords() {
  const [activeUrl, setActiveUrl] = useState('chords');
  return (
    <div>  
        {/* <Navbar /> */}
        <Lessons_main title = "Chords" img = {notes} activeUrl = {activeUrl} setActiveUrl = {setActiveUrl}/> 
        <Notes/>
    </div>
    
  )
}

export default Notes_chords;