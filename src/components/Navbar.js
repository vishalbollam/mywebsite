import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {faBars} from " @fortawesome/free-solid-svg-icons";



function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container">


      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
         <span class="navbar-toggler-icon"></span>
       
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            AboutMe
            </a>
          </li>
         
         
          <li className="nav-item">
            <a className="nav-link" href="#">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Portfolio
            </a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
