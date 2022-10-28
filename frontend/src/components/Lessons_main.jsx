import React from "react";
import "../pages/Lessons-landing-page/lessons.css";

export default function Lessons_main(props){


    return (
        <div className="blue-body">
            <div className="orange-square"></div>
            <div className="white-square">
                <h2 className="contents">Contents</h2>
                <hr />
                <div className="both">

                <div className="pitch_drop">
                <li>
                    <h2>Pitch</h2>
                    <ul>
                    <li>
                        <a href="/lessons/notes">Notes</a>
                    </li>
                    <li>
                        <a href="/lessons/staff">The Staff</a>
                    </li>
                    <li>
                        <a href="/lessons/clefs">Clefs</a>
                    </li>
                    <li>
                        <a href="/lessons/accidenatals">Accidentals</a>
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
            <div className="title">
                <h1>{props.title}</h1>
            </div>
            <div className="notes_image">
                <img src = {props.img} />
            </div>
        </div>
    );
}