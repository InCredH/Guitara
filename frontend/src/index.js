import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import { BrowserRouter as Router} from "react-router-dom";
import './index.css'
import {useState} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
    </Router>
);
