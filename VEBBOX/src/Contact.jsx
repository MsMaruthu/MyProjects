import React from "react";
import './Contact.css'
import { CiLocationOn } from "react-icons/ci";
import { LuMailCheck } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="ct00">
      <div className="prt1">
        <div className="li1"></div>
        <div className="ser1">CONTACT US</div>
        <div className="li2"></div>
      </div>
      <div className=" c00 ">
      <div className="c01">
        <div className="tt00">VEBBOX</div>
        <div className="tt1">Our mission is to enhance business growth of our customers with creative design, development and to deliver market defining high quality solutions that create value and reliable competitive advantage to customers around the globe.</div>
        <div className="tt"><div className="lg"><FaXTwitter /><CiFacebook /><CiInstagram /><CiLinkedin /></div></div>
      </div>
      <div className="c02">
        <div className="tt1"><div className="t6"><CiLocationOn /></div>72, Second floor, Kumbeswaran E St, South Street,
        Kumbakonam, Tamil Nadu 612001</div>
        <div className="tt1"><div className="t6"><CiLocationOn /></div>568, Kurinji Nagar, New housing unit, Thanjavur, 613 005.</div>
        <div className="tt1"><div className="t6"><CiLocationOn /></div>87 first cross street,Yeshwanth nagar,Madambakkam,Chennai-600126.</div>
        <div className="tt1"><div className="t6"><LuMailCheck /></div>  info@vebbox.in</div>
        <div className="tt1"><div className="t6"><IoCallOutline /></div>+91 63793 21835</div>
      </div>
      <div className="c03">
        <div className="tt2"><input className="lb" type="text" placeholder="Name"/></div>
        <div className="tt2"><input className="lb"  type="text" placeholder="Your Email" /></div>
        <div className="tt2"><input className="lb"  type="text" placeholder="Subject" /></div>
        <div className="tt2"><input className="lb1"  type="text" placeholder="Message"/></div>
        <div className="tt2"><button className="btn">Send Message</button></div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
