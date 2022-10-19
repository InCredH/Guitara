import React from "react";
import "../loginStyles.css";
import {useRef, useEffect, useState} from 'react';

function Login() {

// new code
// {isActive ? 'login-container' : 'login-container right-panel-active'} onClick={handleClick}
// const [isActive, setIsActive] = useState(true);
const container = document.getElementById('container');
  const handleClick = event => {
    // 👇️ toggle isActive state on click
    // setIsActive(current => !current);
      event.container.classList.toggle('bg-salmon');
  };  



  // above code is new
//     const ref = useRef(null);
    
  
//     useEffect(() => {
//       // 👇️ use a ref (best)
//       const el2 = ref.current;
//       // console.log(el2);

//       const signUpButton = document.getElementById('signUp');
//       const signInButton = document.getElementById('signIn');
//       const container = document.getElementById('container');

//       console.log(signUpButton);
//     signUpButton.addEventListener('click', () => {
// 	    container.classList.add("right-panel-active");
//     });

// signInButton.addEventListener('click', () => {
// 	container.classList.remove("right-panel-active");
// });
//     }, []);
    
  return (
    <div className="body-login">
      <div className= "login-container" id="container" oncClick = {handleClick}>
      
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button >Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Login;
