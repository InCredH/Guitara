import React from 'react';
import Notes from "../../components/Notes_lessons"
import Lessons_main from "../../components/Lessons_main"
import notes from "../../images/notes_1.png"
import {useState} from 'react';

function Notes_accidentals() {
  const [activeUrl, setActiveUrl] = useState('accidentals');
  return (
    <div>  
        {/* <Navbar /> */}
        <Lessons_main title = "Accidentals" img = {notes} activeUrl = {activeUrl} setActiveUrl = {setActiveUrl}/> 
        <Notes/>
    </div>
    
  )
}

export default Notes_accidentals;