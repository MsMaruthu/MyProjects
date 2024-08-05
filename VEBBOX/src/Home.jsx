import React from "react";
import "./Home.css";
import img3 from './assets/hero-img.webp'

function Home() {
  return (
    <div className="homee" id="Home">
      <div className="home1">
        <h1 className="h21" data-aos="fade-up">
          Grow your business with VEBBOX
          <h3 className="h223">We are team of talented developers making Excellent Solutions to business</h3>
        </h1>
        <button className="btn2">Get Started</button>
      </div>
      <div className="home2">
        <img className="moving-image" src={img3} alt="moving-image" />
      </div>
    </div>
  );
}

export default Home;
