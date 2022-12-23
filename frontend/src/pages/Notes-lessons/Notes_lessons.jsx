import React from 'react';
import Notes from "../../components/Notes_lessons"
import Lessons_main from "../../components/Lessons_main"
import notes from "../../images/notes_1.png"
import {useState} from 'react';

function Notes_Lessons() {
  const [activeUrl, setActiveUrl] = useState('notes');
  return (
    <div>  
        {/* <Navbar /> */}
        <Lessons_main title = "Notes" img = {notes} activeUrl = {activeUrl} setActiveUrl = {setActiveUrl}/> 
        <Notes/>
    </div>
    
  )
}

export default Notes_Lessons;