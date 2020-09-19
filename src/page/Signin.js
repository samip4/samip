import React from 'react'
import { Link } from 'react-router-dom';

function Signin() {
    return (
        <>
       
            <div className="row mt-2 bg-light">
            <div className="col-xl-6 col-lg-6 col-sm-5 col-md-6 text-center mt-5">
            <h1>Welcome Back</h1>
            <div className="mt-4">To keep connected with us please<br />Register with your personal info</div>
            <Link className="btn btn-outline-success my-4 rounded text-center" to="/Register">Register</Link>
            <hr className="w-50 mx-auto bg-success" />
            <h4 className="mt-5">Or login with</h4 >
            <p className="mx-auto mt-5 ic si">
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
            <div className="col-xl-3 col-lg-4 col-11 col-md-4 col-sm-7 mx-auto border bg-white my-5 pb-5 rounded">

            <div className="text-center pb-3 text-center">
            <h3 className="heading mt-3">Sign In</h3>
            <h5>Lets get you on board</h5> 
            </div>

          {/* form */}
          
          
          
        <input className="form-control mx-auto mt-4" type="text" placeholder="Enter your Email" />
        <input className="form-control mx-auto my-4" type="text" placeholder="Enter your Password" />

        <div className="mt-3 mx-auto" to="/about">
        <div className="btn btn-success w-100">Login</div>
        </div>

        <div className="form-check mx-auto mt-4">
            <input type="checkbox" className="form-check-input bg-success" id="exampleCheck1" />
            <label className="form-check-label text-danger" htmlFor="exampleCheck1">Forgot Password?</label>
                    </div>


            </div>
            </div>
        </>
    )
}

export default Signin
