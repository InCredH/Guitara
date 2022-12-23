import React from 'react';
import Notes from "../../components/Notes_lessons"
import Lessons_main from "../../components/Lessons_main"
import notes from "../../images/notes_1.png"
import {useState} from 'react';

function Notes_Staff() {
  const [activeUrl, setActiveUrl] = useState('staff');
  return (
    <div>  
        {/* <Navbar /> */}
        <Lessons_main title = "Staff" img = {notes} activeUrl = {activeUrl} setActiveUrl = {setActiveUrl}/> 
        <Notes/>
    </div>
    
  )
}

export default Notes_Staff;