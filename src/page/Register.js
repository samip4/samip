import React from 'react'
import { Link } from 'react-router-dom';

function Register() {
    return (
        <>
       
            <div className="row mt-2 bg-light">
            <div className="col-xl-6 col-lg-6 col-sm-5 col-md-6 text-center mt-5">
            <h1>Welcome Back</h1>
            <div className="mt-4">To keep connected with us please<br />login with your personal info</div>
            <Link className="btn btn-outline-dark my-4 rounded text-center" to="/signin">Sign In</Link>
            <hr className="w-50 mx-auto bg-success" />
            <h4 className="mt-5">Or login with</h4 >
            <p className="mx-auto mt-5 ic">
            {/* <!-- Facebook --> */}
            <i className="fb-ic">
            <i className="fa fa-facebook mr-4"> </i>
            </i>
            {/* <!-- Twitter --> */}
            <i className="tw-ic">
            <i className="fa fa-twitter mr-4"> </i>
            </i>

            {/* <!--Instagram--> */}
            <i className="ins-ic">
            <i className="fa fa-instagram mr-4"> </i>
            </i>

            {/* <!--Linkedin --> */}
            <i className="li-ic">
            <i className="fa fa-linkedin"> </i>
            </i>
            </p>
            </div>

            {/* second section===================================== */}
            <div className="col-xl-4 col-lg-4 col-11 col-md-4 col-sm-7 mx-auto border bg-white my-4 rounded">

            <div className="text-center pb-3 text-center">
            <h3 className="heading mt-3">Register</h3>
            <h5>Lets get you on board</h5>
            </div>

          {/* form */}
          
          <input className="form-control mx-auto" type="text" placeholder="Enter your full name" />
          <input className="form-control mx-auto mt-4" type="text" placeholder="Choose your location" />
          <div className="dropdown">
            <button type="button" className="form-control text-left dropdown-toggle mx-auto mt-4" data-toggle="dropdown">
            Choose Veg Status &nbsp;
            </button>
            <div className="dropdown-menu form-control bg-light">
            <a className="dropdown-item bg-light" href="/Register">Vegetarian</a>
            <a className="dropdown-item bg-light" href="/Register">Vegan</a>
            <a className="dropdown-item bg-light" href="/Register">Veg Options</a>
            </div>
        </div>
        <input className="form-control mx-auto mt-4" type="text" placeholder="Enter your Email" />

        <div className="form-check mx-auto mt-4">
            <input type="checkbox" className="form-check-input bg-success" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">I agree to the Terms of Use and Privacy Policy and default notification settings. I am 13+ years old.</label>
        </div>

        <div className="mt-3 mx-auto" to="/about">
        <div className="btn btn-success w-100">Register</div>
        </div>

        <div className="text-center my-3 text-secondary">
        We never sell your info or let other companies user it. You may adjust settings later.
        </div>

            </div>
            </div>
        </>
    )
}

export default Register
