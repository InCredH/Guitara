import React from 'react';
import "./Notes_keys.css";
import Notes from "../../components/Notes_lessons"
import Lessons_main from "../../components/Lessons_main"
import notes from "../../images/notes_1.png"
import {useState} from 'react';

function Notes_keys() {
  const [activeUrl, setActiveUrl] = useState('keys');
  return (
    <div>  
        {/* <Navbar /> */}
        <Lessons_main title = "Keys" img = {notes} activeUrl = {activeUrl} setActiveUrl = {setActiveUrl}/> 
        <Notes/>
    </div>
    
  )
}

export default Notes_keys;