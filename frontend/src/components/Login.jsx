import React from "react";
import "../loginStyles.css";
import axios from "axios";
import {useRef, useEffect, useState} from 'react';

const API_URL = process.env.REACT_APP_API_URL;
function Login({setIsAuthenticated}) {

  const loginContainerRef = useRef(null);
  const [signupData, setSignupData] = useState({
		email: "",
		userName: "",
		password: "",
	});
  const [loginData, setLoginData] = useState({
		email: "",
		userName: "",
		password: "",
	});

	const Signup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/signup`,{
        email: signupData.email,
        userName: signupData.userName,
        password: signupData.password
      })
      console.log(res)
    }catch(e) {
      console.log(e);
    }
	}

  const Login = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post(`${API_URL}/signin`,{
        email: loginData.email,
        password: loginData.password
      })
      const userData = {
        userName: res.data.message.userName,
        email: res.data.message.email,
        token: res.data.token
      }
      const stringUserData = JSON.stringify(userData);
      localStorage.setItem("guitaraUser", stringUserData);
      setIsAuthenticated(true);
    }catch(e) {
      console.log(e);
    }
    loginContainerRef.current.value = '';
  } 

	const signupInputHandler = (event) => {
		const { name, value } = event.target;
		setSignupData((prevData) => {
			return { ...prevData, [name]: value };
		});
	}

	const loginInputHandler = (event) => {
		const { name, value } = event.target;
		setLoginData((prevData) => {
			return { ...prevData, [name]: value };
		});
	}

  const tabChange = () => {
    loginContainerRef.current.classList.toggle("right-panel-active");
  }
    


  return (
    <div className="body-login">
      <div ref={ loginContainerRef} className= "login-container" id="container">
      
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="social">
                <i className="fa fa-google" />
              </a>
              <a href="#" className="social">
                <i className="fa fa-linkedin" />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input value={signupData.userName} onChange={signupInputHandler} type="text" placeholder="Name" name="userName" />
            <input value={signupData.email} onChange={signupInputHandler} type="email" placeholder="Email" name="email"/>
            <input value={signupData.password} onChange={signupInputHandler} type="password" placeholder="Password" name="password" />
            <button onClick={Signup}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fa fa-facebook" />
              </a>
              <a href="#" className="social">
                <i className="fa fa-google" />
              </a>
              <a href="#" className="social">
                <i className="fa fa-linkedin" />
              </a>
            </div>
            <span>or use your account</span>
            <input value={loginData.email} onChange={loginInputHandler} type="email" placeholder="Email" name="email" />
            <input value={loginData.password} onChange={loginInputHandler} type="password" placeholder="Password" name="password"/>
            <a href="#">Forgot your password?</a>
            <button onClick={Login}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
            <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
             
              <button className="ghost" id="signIn" onClick={tabChange}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
            <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signUp" onClick={tabChange}>
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