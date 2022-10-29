import React, {useState} from "react";
import "../pages/Lessons-landing-page/lessons.css";

export default function Lessons_main({activeUrl, setActiveUrl, title, img}){
    
    return (
        <div className="blue-body">
            <div className="left_container">
            <div className="box_wrapper">
            <div className="white-square">
                <h2 className="contents">Contents</h2>
                <hr />
                <div className="both">

                <div className="pitch_drop">
                <li>
                    <h2>Pitch</h2>
                    <ul>
                    <li>
                        <a href="/lessons/notes" className={`${activeUrl === "notes" ? 'active':""}`} onClick={()=>setActiveUrl("notes")}>Notes</a>
                    </li>
                    <li>
                        <a href="/lessons/staff" className={`${activeUrl === "staff" ? 'active':""}`} onClick={()=>setActiveUrl("staff")}>The Staff</a>
                    </li>
                    <li>
                        <a href="/lessons/clefs" className={`${activeUrl === "clefs" ? 'active':""}`}  onClick={()=>setActiveUrl("clefs")}>Clefs</a>
                    </li>
                    <li>
                        <a href="/lessons/accidentals" className={`${activeUrl === "accidentals" ? 'active':""}`} onClick={()=>setActiveUrl("accidentals")}>Accidentals</a>
                    </li>
                    </ul>
                </li>
                </div>
                
                <div className="structure_drop">
                <li>
                    <h2>Structure</h2>
                    <ul>
                    <li>
                        <a href="/lessons/intervals">Intervals</a>
                    </li>
                    <li>
                        <a href="/lessons/chords">Chords</a>
                    </li>
                    <li>
                        <a href="/lessons/scales">Scales</a>
                    </li>
                    <li>
                        <a href="/lessons/keys">Keys</a>
                    </li>
                    </ul>
                </li>
                </div>
                </div>
            </div>
            </div>
            </div>
            
           
           <div className="info_wrapper"> 
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <div className="notes_image">
                    <img src = {img} />
                </div>
           </div>   
        </div>
    );
}