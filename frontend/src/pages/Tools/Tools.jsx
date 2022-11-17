import React from 'react';
import ToolBox from './ToolBox';
import tools_metro from '../../images/tools_metro.png';
import tools_tuner from '../../images/tools_tuner.png';
import tool_drum from '../../images/tools_drum.png';
import "./style1.css";


function Tools() {
  return (
    <div className='features-header tools_background'>
        <div id='main img_back_change'>
            <div id='features name'>
                <div className = 'a-container more_margin'>
                    <a href="https://qiuxiang.github.io/tuner/app/" target="_blank"><ToolBox image = {tools_tuner} title = 'Tuner'/></a>
                    <a href="https://netstorm84.github.io/Metronome/" target="_blank"><ToolBox image = {tools_metro} title = 'Metronome' /></a>
                    <a href="https://www.youtube.com/watch?v=QLNGUV4vi4U" target="_blank"><ToolBox image = {tool_drum} title = 'Drum Machine'/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tools;