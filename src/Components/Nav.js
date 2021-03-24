import React from 'react'
import { Link } from "react-router-dom";

// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Footer from "./Pages/Footer";

export default function Nav () {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="d-flex flex-grow-1">
        <span class="d-lg-none d-block"></span>
        <a class="navbar-brand"> Erika Cueva </a>
        <div class="w-100 text-right">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#myNavbar7"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      <div
        class="collapse navbar-collapse flex-grow-1 text-right"
        id="myNavbar7"
      >
        <ul class="navbar-nav ml-auto flex-nowrap">
          {/* <li class="nav-item">
            <a href="contact.html" class="nav-link">Contact</a>
          </li>
          <li class="nav-item">
            <a href="portfolio.html" class="nav-link">Portfolio | Resume</a>
          </li> */}
         
          <li className="nav-item">
          <Link to="/home">Home </Link>
          </li>
          {/* <li className="nav-item">
          <Link to="/about"> About </Link>
          </li> */}
          <li className="nav-item" >
          <Link to="/portfolio"> Portfolio </Link>
          </li>
          <li className="nav-item">
          <Link to="/contact"> Contact </Link>
          </li>
        </ul>
      </div>
    </nav>

        </div>
    )
}
 

// look up bootstrap docs to find a way for spacing re nav items