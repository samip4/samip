import React from 'react'
import bottom from "../img/bottom-bar.png";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
          {/* <!-- Footer --> */}
<img className="w-100" src={bottom} alt="footer" />
<div className="page-footer font-small unique-color-dark pt-1">
{/* <!-- Footer Links --> */}
<div className="container text-center text-md-left mt-5">

  {/* <!-- Grid row --> */}
  <div className="row mt-3">

    {/* <!-- Grid column --> */}
    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

      {/* <!-- Content --> */}
      <h6 className="text-uppercase font-weight-bold">Company name</h6>
      <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
      <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
        consectetur
        adipisicing elit.</p>

    </div>
    {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

{/* <!-- Links --> */}
<h6 className="text-uppercase font-weight-bold">Contact</h6>
<hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
<p>
  <i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
<p>
  <i className="fa fa-envelope mr-3"></i> info@example.com</p>
<p>
  <i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
<p>
  <i className="fa fa-print mr-3"></i> + 01 234 567 89</p>

</div>
{/* <!-- Grid column --> */}

{/* <!-- Grid column --> */}
<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

{/* <!-- Links --> */}
<h6 className="text-uppercase font-weight-bold">Useful links</h6>
<hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
<p>
  <Link to="/">Your Account</Link>
</p>
<p>
  <Link to="/">Become an Affiliate</Link>
</p>
<p>
  <Link to="/">Shipping Rates</Link>
</p>
<p>
  <Link to="/">Help</Link>
</p>

</div>
{/* <!-- Grid column --> */}


    {/* <!-- Grid column --> */}
    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">

      {/* <!-- Links --> */}
      <h6 className="text-uppercase font-weight-bold">Follow Us</h6>
      <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
      <p className="mx-auto ic">
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
    {/* <!-- Grid column --> */}
  

  </div>
  {/* <!-- Grid row --> */}

</div>
{/* <!-- Footer Links --> */}
<hr className="mx-auto w-75 hrf" />

{/* <!-- Copyright --> */}
<div className="footer-copyright text-center py-3">© 2020 Copyright:
  <Link to="/"> chemtradeasia.com</Link>
</div>
{/* <!-- Copyright --> */}

</div>
{/* <!-- Footer --> */}  
        </>
    )
}

export default Footer
