import React, {useState} from 'react';
import logo from '../images/Guitara-logo.png';

function Navbar() {
    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
  
    return (
    <nav className='nav'>
        <a href='#' className='logo'>
            <img src = {logo} alt = ''/>
        </a>
        <input type = 'checkbox' className='menu-btn' id = 'menu-btn' />
        <label className='menu-icon' for = 'menu-btn'>
            <span className='nav-icon' ></span>
        </label>
        <ul className='menu'>
            <li><a href='#'>Exercises</a></li>
            <li><a href='#'>Lessons</a></li>
            <li><a href='#'>Tools</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Community</a></li>
            <li><a href='#' className='active'>Login</a></li>
            <li><a href='#' className='active'>Signup</a></li>
        </ul>
    </nav>
  )
}

export default Navbar;