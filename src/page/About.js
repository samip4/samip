import React from 'react';
import '../css/about.css';
import about_img from "../img/about.png";
import user from "../img/user.png";
import { Link } from 'react-router-dom';

const About =() => {
  return (
        <>

          <div className="jumbotron text-center py-5"><h3 className="heading">About Us</h3>
          </div>


          <div className="align-item-center">
          <div className="row">
          <div className="col-lg-6 col-md-11 mx-auto mt-5 text-center">
          <h3 className="heading mb-5">What You Should know About Us</h3>
          <p>
          Over the years we have grown in all aspects — and continue to every day — but our goals have remained the same. Have fun while working with the best technology at hand. Design and create the finest product we can. Compete with the top in the industry. Learn from the best.<br /><br />

          Focus on the essential. Cultivate openness and respect in all communication. Be friends with one another. Learn constantly. Share what we know.
          </p>
          <span>MR. Manoj, CEO Tradeasia.</span>
          </div>
          <div className="col-lg-5 col-md-11 mx-auto mt-5">
          <img className="news_img" src={about_img} alt="contact" />
          </div>
          </div>
          </div>

          {/* Subscribe our Newsletter */}

         <section className="align-item-center py-5 newsletter">
          <div className="row pt-5">
          <div className="col-lg-6 col-md-12">
          <img className="news_img" src={user} alt="event" />
          </div>
          <div className="col-lg-6 col-md-12 mt-md-5 my-5 d-flex flex-column">
          <h3 className="heading">Subscribe our Newsletter</h3>
          <p className="mt-4" style={{fontSize:'20px', lineHeight:'1.6'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit donec tempus pellentesque dui vel tristique purus justo</p>
          <div className="active-cyan-3 mt-5">
          <input className="form-control" type="text" placeholder="Type Your Email....." />
          </div>
          <Link className="button text-center mt-5 w-75" to="/about">Subscribe Now</Link>
          </div>
          
          </div>
          </section>

          {/* End Subscribe our Newsletter */}

        </>
    );
  }


export default About;