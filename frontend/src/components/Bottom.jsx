import React from "react";
import logo from "../images/Guitara-logo1.png";

function Bottom() {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
          <img src={logo} alt="" />

        <p class="footer-links">
          <a href="/">Home</a>|<a href="/exercises">Exercises</a>|<a href="/lessons">Lessons</a>|
          <a href="/tools">Tools</a>|<a href="/community">Community</a>
        </p>

        <p class="footer-company-name">
          © 2022 Guitara Private Limited
        </p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            Sardar Patel Institute of Technology
            <span>Andheri, Mumbai - 400710</span> 
          </p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+91 7506438651</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="support@guitara.com">support@guitara.com</a>
          </p>
        </div>
      </div>
      <div class="footer-right">
        <p class="footer-company-about">
          <span>About Guitara</span>
          A place for you to learn, practice and show off your Guitar skills.
        </p>
        <div class="footer-icons">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          
          <a href="#">
            <i class="fa fa-instagram"></i>
          </a>
          
          <a href="#">
            <i class="fa fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Bottom;
