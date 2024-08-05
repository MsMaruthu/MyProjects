import React from "react";
import "./Services.css";
import glb from "./assets/globe.png";

function Services() {
  return (
    <>
      <div id="services" className="Ser0">
        <div className="tag0">
          <div className="tag1">
            <div className="li1"></div>
            <div className="ser1">SERVICES</div>
            <div className="li2"></div>
          </div>
          <h5 className="our">Our software development services</h5>
        </div>
      </div>
      <div className="contn0">
        <div className="contn1">
          <div className="imgbx">
            <img className="glb" src={glb} height="50px" />
            <div className="tx1">
              Custom Application <br /> Development Services
            </div>
            <div className="tx2">
              We rely on our technological expertise and specialized industry
              experience to develop any type of web, mobile, desktop, and hybrid
              app per your business requirements.
            </div>
          </div>
        </div>
        <div className="contn2">
          <div className="imgbx">
            <img className="glb" src={glb} height="50px" />
            <div className="tx1">
              App Maintenance
              <br /> Services
            </div>
            <div className="tx2">
              Our application maintenance and modernization services are
              designed to ensure the scalability, performance, and
              sustainability of your entire software infrastructure as your
              business grows.
            </div>
          </div>
        </div>
        <div className="contn3">
          <div className="imgbx">
            <img className="glb" src={glb} height="50px" />
            <div className="tx1">
              QA and Software <br />
              Testing Services
            </div>
            <div className="tx2">
              Comprehensive quality assurance is built into our custom software
              service model, but we can also provide on-demand QA and a suite of
              functional and usability software tests upon request.
            </div>
          </div>
        </div>
        <div className="contn4">
          <div className="imgbx">
            <img className="glb" src={glb} height="50px" />
            <div className="tx1">
              API Integration <br />
              Services
            </div>
            <div className="tx2">
              We build and implement custom APIs for all breeds of applications,
              helping to add functionality to your software systems and
              facilitate communication between your apps and others.
            </div>
          </div>
        </div>
      </div>
      <div className="ser1">
        <div className="cont1">
          <div className="contn5">
            <div className="imgbx">
              <img className="glb" src={glb} height="50px" />
              <div className="tx1">
              IT Security Services
              </div>
              <div className="tx2">
              Our thorough threat audits help us identify your software infrastructure's most pressing vulnerabilities, allowing us to integrate the encryptions, security services and access protocols you require.
              </div>
            </div>
          </div>
          <div className="contn6">
            <div className="imgbx">
              <img className="glb" src={glb} height="50px" />
              <div className="tx1">
              Software Deployment<br/> Services
              </div>
              <div className="tx2">
              Our implementation specialists will work with your IT team to establish detailed software deployment objectives and timelines, covering configuration, testing, project governance, troubleshooting and more.


              </div>
            </div>
          </div>
          <div className="contn7">
            <div className="imgbx">
              <img className="glb" src={glb} height="50px" />
              <div className="tx1">
                
Data Backup and <br/>Recovery Services
              </div>
              <div className="tx2">
              We implement robust data backup and recovery strategies for cloud-based, on-premises and hybrid servers, designed to ensure the integrity of your data and the continuity of your business.
              </div>
            </div>
          </div>
          <div className="contn8">
            <div className="imgbx">
              <img className="glb" src={glb} height="50px" />
              <div className="tx1">
               
Software Migration <br/>Services
              </div>
              <div className="tx2">
              We perform cloud-based migrations, system upgrades and other vital software modernization services prioritizing system uptime and data integrity throughout an often daunting IT transition.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
