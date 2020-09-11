import React from 'react'
import '../css/new.css';
import '../js/Newjs.js';
import top_one from "../img/dashboard.webp";
import top_two from "../img/home-security.webp";
import top_three from "../img/icons1.webp";
import img from "../img/AdobeStock_221.webp";
import { Link } from 'react-router-dom';



function New() {
    return (
        <>

        <div className="top-section pb-5">
          <div className="text-center pt-5">
           <h2>RAVEN | Homeland</h2>
           <p className="new_heading">(Real-time AI based Video analytics ENgine)</p>
          </div>
          <div className="row">

          <div className="col-11 top_card col-md-5 col-lg-3 mx-auto text-center mt-5">
          <img className="mt-5 mb-3" src={top_one} alt="" />
          <p>AI Algorithm for automated public safety events detection in reat-time.</p>
          </div>

          <div className="col-11 top_card col-md-5 col-lg-3 mx-auto text-center mt-5">
          <img className="mt-5 mb-3" src={top_two} alt="" />
          <p>AI Algorithm for automated public safety events detection in reat-time.</p>
          </div>

          <div className="col-11 top_card col-md-5 col-lg-3 mx-auto text-center mt-5">
          <img className="mt-5 mb-3" src={top_three} alt="" />
          <p>AI Algorithm for automated public safety events detection in reat-time.</p>
          </div>
          
          </div>

          <div className="text-center mx-auto mt-5 mb-3">
          <Link to="" className="top_button">Request Demo</Link>
          </div>

        </div>

        {/* second section */}
        <div className="second-section py-5">
        <div className=" col-lg-11 mx-auto">
          <h2>How can we help?</h2>
          <h4>Detect risks in real time</h4>
          <div className="col-8 second_card col-md-6 col-lg-5 mx-auto text-center mt-5">
          <p>AI Algorithm for automated public safety events detection in reat-time.</p>
          </div>
          </div>
          </div>

          {/* section three */}
          <div className="top-section pb-5">
          <div className="text-center pt-5">
           <h4 className="three_heading">Detect potential risks in real time</h4>
           <div className="bottom-border"></div>
           </div>
           
          {/* image scroll */}
         
</div>

        </>
    )
}

export default New
