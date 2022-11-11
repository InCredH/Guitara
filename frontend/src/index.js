import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import { BrowserRouter as Router} from "react-router-dom";
import './index.css'
import {useState} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

// const [user, setUser] = useState(null);

// const refreshToken = async () => {
//   try {
//     const res = await axios.post("http://localhost:8800/api/refresh", { refresh_token: user.refresh_token });
//     setUser({
//       ...user,
//       access_token: res.data.access_token,
//       refresh_token: res.data.refresh_token,
//     });
//     return res.data;
//   } catch (err) {
//     console.log(err);
//   }
// };

// const axiosJWT = axios.create()

// axiosJWT.interceptors.request.use(
//   async (config) => {
//     let currentDate = new Date();
//     const decodedToken = jwt_decode(user.access_token);
//     console.log(decodedToken)
//     if (decodedToken.exp * 1000 < currentDate.getTime()) {
//       console.log("access token expired!")
//       const data = await refreshToken();
//       config.headers["Authorization"] = "Bearer " + data.access_token;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
    </Router>
);


// const tools = ReactDOM.createRoot(document.getElementById('tools'));
// root.render(
//     <Tools />
// );
