import React from 'react'

function Add_listing() {
    return (
        <div>
            {/* start */}


            <div className="container text-center py-4 col-xl-6 col-lg-6 col-md-9 col-sm-11 col-11">
            <h5>Create your own profile on BeingVegetarian and get access to members only benefits and an active, vibrant online community.</h5> </div>
            <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-8 col-sm-8 col-10 container mx-auto border rounded bg-light pt-4 pb-5">
            <div className="col-12">
            <b>Are you the Owner or Manager?</b></div>
            <div className="col-12 mt-2 mb-4">
            <button className="btn btn-sm btn-outline-success">No, I'm not</button>
            <button className="btn btn-sm btn-success ml-2">Yes, I am</button>
            </div>
            <div className="col-12 pt-1">
            
            <div className="form-group mt-4">
    <label for="exampleInputEmail1"><b>Your Name</b></label>
    <input className="form-control" type="text" placeholder="Your Name" />
             </div>
             
             <div className="form-group mt-4">
    <label for="exampleInputEmail1"><b>Your Email</b></label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your Email" />
             </div>

             <div className="form-group mt-4">
    <label for="exampleInputEmail1"><b>Restaurant Name</b></label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Restaurant Name" />
             </div>

             <div className="form-group mt-4">
    <label for="exampleInputEmail1"><b>Choose your location</b></label>
    <input className="form-control" type="text" placeholder="Choose your location" />
             </div>

             <div class="form-group">
    <label for="exampleFormControlTextarea1"><b>Comments</b></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div className="mt-5 mx-auto" to="/about">
        <div className="btn btn-success w-100">Register</div>
        </div>



             </div>
             </div>
             </div>

             
             {/* //end */}
        </div>
    )
}

export default Add_listing
