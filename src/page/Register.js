import React from 'react'

function Register() {
    return (
        <>
       
            <div className="row mt-2">
            <div className="col-12 col-sm-6 col-lg-5 mx-auto border" style={{backgroundColor: 'rgb(248, 246, 255)', borderRadius: '25px'}}>

            <div className="text-center pb-3 pt-5 text-center">
            <h3 className="heading">Register</h3>
            <h5>Lets get you on board</h5>
            </div>

          {/* form */}
          
          <input className="form-control w-75 mx-auto" type="text" placeholder="Enter your full name" />
          <input className="form-control w-75 mx-auto mt-4" type="text" placeholder="Choose your location" />
          <div className="dropdown">
            <button type="button" className="form-control text-left dropdown-toggle w-75 mx-auto mt-4" data-toggle="dropdown">
            Choose Veg Status &nbsp;
            </button>
            <div className="dropdown-menu form-control w-75 bg-light">
            <a className="dropdown-item bg-light" href="/Register">Vegetarian</a>
            <a className="dropdown-item bg-light" href="/Register">Vegan</a>
            <a className="dropdown-item bg-light" href="/Register">Veg Options</a>
            </div>
        </div>
        <input className="form-control w-75 mx-auto mt-4" type="text" placeholder="Enter your Email" />

        <div className="form-check w-75 mx-auto mt-4">
            <input type="checkbox" className="form-check-input bg-success" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">I agree to the Terms of Use and Privacy Policy and default notification settings. I am 13+ years old.</label>
        </div>

        <div className="text-center text-secondary mt-4">
        We never sell your info or let other companies user it. You may adjust settings later.
        </div>

        <div className="button text-center mt-3 w-50 mx-auto mb-5" to="/about">Subscribe Now</div>

            </div>
            </div>
        </>
    )
}

export default Register
