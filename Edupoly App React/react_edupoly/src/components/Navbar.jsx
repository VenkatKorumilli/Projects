import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light p-0">
  <div className="container-fluid bg-primary">
    <img src="https://edupolyoldsite.vercel.app/common/assets/edupoly-logo-dark.png" width="200px"/>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-white fs-5 fw-bold" href="/home" id="#home" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fs-5 fw-bold" href="/About" >About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fs-5 fw-bold" href="/courses" >Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fs-5 fw-bold" href="/tutorials" >Tutorials</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fs-5 fw-bold" href="/contact" >Contact</a>
        </li>
   
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
