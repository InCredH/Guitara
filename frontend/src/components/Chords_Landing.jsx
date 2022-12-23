import React from "react";
// import "../pages/Notes-lessons/Notes_lessons.css";
// import image from '../images/Notes_p.png';
// import note_image from "../images/lessons-landing-note.svg";
import '../pages/Notes-chords/Notes_chords.css'

function Chords_Landing() {
  return (
    
    <div className="orange-body">
        <div className="white-body">
        <h1>Chords: </h1>
        <h2>A</h2>
        <ins className="scales_chords_api" chord='A' instrument="guitar" output="image"></ins>
        <ins className="scales_chords_api" chord='Am' instrument="guitar" output="image"></ins>
        <ins className="scales_chords_api" chord='A#' instrument="guitar" output="image"></ins>
        <ins className="scales_chords_api" chord='A#M' instrument="guitar" output="image"></ins>
        <h2>B</h2>
        <ins className="scales_chords_api" chord='B' instrument="guitar" output="image"></ins>
        <ins className="scales_chords_api" chord='Bm' instrument="guitar" output="image"></ins>
        <h2>C</h2>
        <ins className="scales_chords_api" chord='C' instrument="guitar" output="image"></ins>
        <ins className="scales_chords_api" chord='Cm' instrument="guitar" output="image"></ins>
        <ins className="scales_chords_api" chord='C#' instrument="guitar" output="image"></ins>
        <ins className="scales_chords_api" chord='C#m' instrument="guitar" output="image"></ins>
        <h2>D</h2>
        <ins className="scales_chords_api" chord='D' instrument="guitar" output="image"></ins>
        <ins className="scales_chords_api" chord='Dm' instrument="guitar" output="image"></ins>
        <ins className="scales_chords_api" chord='D#' instrument="guitar" output="image"></ins>
        <ins className="scales_chords_api" chord='D#m' instrument="guitar" output="image"></ins>
        <h2>E</h2>
        <ins className="scales_chords_api" chord='E' instrument="guitar" output="image"></ins>
        <ins className="scales_chords_api" chord='Em' instrument="guitar" output="image"></ins>

        <h2>F</h2>
        <ins className="scales_chords_api" chord='F' instrument="guitar" output="image"></ins>
        <ins className="scales_chords_api" chord='Fm' instrument="guitar" output="image"></ins>
        <ins className="scales_chords_api" chord='F#' instrument="guitar" output="image"></ins>
        <ins className="scales_chords_api" chord='F#m' instrument="guitar" output="image"></ins>
        <h2>G</h2>
        <ins className="scales_chords_api" chord='G' instrument="guitar" output="image"></ins>
        <ins className="scales_chords_api" chord='Gm' instrument="guitar" output="image"></ins>
        <ins className="scales_chords_api" chord='G#' instrument="guitar" output="image"></ins>
        <ins className="scales_chords_api" chord='G#m' instrument="guitar" output="image"></ins>
        </div>
    </div>
  );
}

export default Chords_Landing;
