import React from "react";
import "./Products.css";
import img1 from "./assets/img1.webp";
import img2 from "./assets/img2.webp";
import img3 from "./assets/img3.webp";
import img4 from "./assets/img4.webp";

const Products = () => {
  return (
    <>
      <div id="Products" className="pr0">
        <div className="pt0">
          <div className="prt1">
            <div className="li1"></div>
            <div className="ser1">Products</div>
            <div className="li2"></div>
          </div>
        </div>
        <div className="txtp">
          People don't buy products, they buy solutions
        </div>
        <div className="combox0">
          <div className="box1">
            <div className="sb1">
              <div className="t1">Data Analyzer</div>
               <div className="t2">
                The systematic application of statistical and logical techniques
                to describe the data scope, modularize the data structure
                illustrate via images, tables, and graphs.
              </div>
            </div>
          </div>
          <div className="box2">
            <div className="sb2">
              <div className="t1"> Websites</div>
              <div className="t2">
                We create a enhanced website, customers can easily access
                information about your business. They can see what products or
                services you sell, your prices, your location and much more.
              </div>
            </div>
          </div>
          <div className="box3">
            <div className="sb3">
              <div className="t1">Billing Software</div>
              <div className="t2">
                A billing software can be any software designed to handle time
                and billing tracking as well as invoicing customers for services
                and products.
              </div>
            </div>
          </div>
          <div className="box4">
            <div className="sb4">
              <div className="t1">Industrial Trainings</div>
              <div className="t2">
                Our Industrial Training is to expose the students to actual
                working environment and enhance their knowledge and skill from
                what they have learned in the college.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
