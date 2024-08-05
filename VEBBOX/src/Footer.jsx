 import React from 'react'
 import './Footer.css'
 import { FaRegCopyright } from "react-icons/fa";
 
 const Footer = () => {
   return (
     <div className='ftt'>
        <div className="ft0">
            <p className='p1'><FaRegCopyright /> Copyright</p>
            <p className='p2'>VEBBOX SOFTWARE SOLUTIONS.</p>
            <p className='p3'>All Rights Reserved</p>
            
        </div>
        <div className="ft1">
            <p className='p4'>Designed by</p>
            <a className='p5' href="https://www.vebbox.com/">VEBBOX SOFTWARE SOLUTIONS.</a>
        </div>
       
     </div>
   )
 }
 
 export default Footer