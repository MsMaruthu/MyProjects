import React from "react";
import "./About.css";
import ig1 from "./assets/counts-img.png";
import { FaRegSmile } from "react-icons/fa";
import { MdOutlineFax } from "react-icons/md";import { CiClock2 } from "react-icons/ci";import { CiTrophy } from "react-icons/ci";

const About = () => {
  return (
    <>
      <div id="About" className="abt0">
        <div className="tag1">
          <div className="li1"></div>
          <div className="ser1">ABOUT US</div>
          <div className="li2"></div>
        </div>
      </div>
      <div className="tag2">
        <div className="pt1">
          <p>
            We are consummate custom software Development company delivering
            splendid business IT Solutions and related services to customers
            across the globe. Our development services are led by our dedicated
            and passionate team to provide best industry practices combined with
            technology expertise and business domain knowledge to drive digital
            transformation.
          </p>
        </div>
        <div className="pt1">
          <p>
            Our proficiency in understanding business challenges and
            professional competence allows us to create a better experience for
            our customers. Our efforts focus on concept, design, development and
            re-engineering of web businesses. We are working closely with
            software majors on new applications.
          </p>
        </div>
      </div>
      <div className="igt0">
        <div className="gt1">
          <img className="ig1" src={ig1} />
        </div>
        <div className="gt2">
          <div className="gt21">
           <div className="gt2child">
           <div className="smi">{<FaRegSmile />}</div>
           <h1 className="gt0">25</h1>
           </div>
            <div className="gt221">
              <p className="pt">
                Happy Clients A satisfied customer is<br/> the best bussiness goal.
              </p>
            </div>
          </div>
          <div className="gt21"><div className="gt2child">
           <div className="smi">{<MdOutlineFax />}</div>
           <h1 className="gt0">135</h1>
           </div>
            <div className="gt221">
              <p className="pt">
              Projects we build projects with satisfied customers
              </p>
            </div></div>
          <div className="gt21"><div className="gt2child">
           <div className="smi">{<CiClock2 />}</div>
           <h1 className="gt0"></h1>
           </div>
            <div className="gt221">
              <p className="pt">
              Working Technologies We help enterprises accelerate adoption of new technologies, produce innovation.
              </p>
            </div></div>
          <div className="gt21"><div className="gt2child">
           <div className="smi">{
            <CiTrophy />}</div>
           <h1 className="gt0">25</h1>
           </div>
            <div className="gt221">
              <p className="pt">
              Developers Our skilled technicians and engineers to implement the new technologies.
              </p>
            </div></div>
        </div>
      </div>
    </>
  );
};

export default About;
