import React from 'react';
import '../css/contact.css';
import Contact_img from "../img/contactus.svg";
import { Link } from 'react-router-dom'

const Contact =() => {
  return (
        <>

          <div className="jumbotron text-center py-5"><h3 className="heading">Contact Us</h3>
          </div>

          {/* contact card Start */}
          <div className="py-5">
          <div className="row pb-5">
          {/* contact card one */}
          <div className="contact-card col-11 col-md-5 col-lg-3 mx-auto text-center mt-4 pb-5">
          <i className="fa fa-phone my-4"></i>
          <h1>Phone Number</h1>
          <p className="mt-3">Start working with Landrick that can provide everything</p>
          <p>(+066) 518 - 457 - 5181</p>
          </div>
          {/* contact card two */}
          <div className="contact-card col-11 col-md-5 col-lg-3 mx-auto text-center mt-4 pb-5">
          <i className="fa fa-envelope my-4"></i>
          <h1>Email Address</h1>
          <p className="mt-3">Start working with Landrick that can provide everything</p>
          <p>info@example.com</p>
          </div>
          {/* contact card three */}
          <div className="contact-card col-11 col-md-5 col-lg-3 mx-auto text-center mt-4 pb-5">
          <i className="fa fa-globe my-4"></i>
          <h1>Office Address</h1>
          <p className="mt-3">Start working with Landrick that can provide everything</p>
          <p>View on Google map</p>
          </div>
          </div>
        </div>
        {/* contact card End */}

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1496.0603472711348!2d72.86530901966047!3d19.114865085954357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83a33e286cb%3A0xdde9081f79dd3a42!2sTradeasia%20International%20Pvt%20Ltd%20(Mumbai%20Office)!5e0!3m2!1sen!2sin!4v1598957157440!5m2!1sen!2sin" width="100%" height="400" title="map"></iframe>

        {/* contact form */}
        <div className="align-item-center">
          <div className="row">
          <div className="col-lg-6 col-md-12 mt-5">
          <img className="news_img" src={Contact_img} alt="contact" />
          </div>
          <div className="col-lg-4 col-md-11 mx-auto mt-5 text-center">
          <div className="cont-form my-5 py-5">
          <h3 className="heading">Lets Talk with Us</h3>
          <input type="text" className="form-control mb-2 w-75 mt-4 mx-auto" placeholder="Name" />
          <input type="email" className="form-control my-2 w-75 mx-auto" placeholder="Enter email" />
          <textarea className="form-control my-4 w-75 mx-auto" placeholder="Enter message" rows="3" />
          <Link className="button mx-auto mt-5" to="/about">Submit Now</Link>
          </div>
          </div>
          </div>
          </div>
        
        </>
    );
  }

export default Contact;