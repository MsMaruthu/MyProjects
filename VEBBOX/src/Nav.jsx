import React from "react";
import './Nav.css'
import img from './assets/vblogo.webp'

function Nav() {
  return (
    <>
      <nav className="nav1">
        <img className="img1" src={img} />
        <div className="nav2">
          <a className="home" href="#Home">
            Home
          </a>
          <a className="services" href="#services">
            Services
          </a>
          <a className="products" href="#Products">
            Products
          </a>
          <a className="about" href="#About">
            About Us
          </a>
          <a href="#Home"><button className="gtbtn">Get Started</button></a>
          </div>
       
      </nav>
    </>
  );
}

export default Nav;
