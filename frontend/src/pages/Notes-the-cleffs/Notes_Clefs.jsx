import React from 'react';
import Notes from "../../components/Notes_lessons"
import Lessons_main from "../../components/Lessons_main"
import notes from "../../images/notes_1.png"
import {useState} from 'react';

function Notes_Clefs() {
  const [activeUrl, setActiveUrl] = useState('clefs');
  return (
    <div>  
        {/* <Navbar /> */}
        <Lessons_main title = "Clefs" img = {notes} activeUrl = {activeUrl} setActiveUrl = {setActiveUrl}/> 
        <Notes/>
    </div>
    
  )
}

export default Notes_Clefs;