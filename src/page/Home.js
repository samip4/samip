import React from 'react';
import RestCard from './RestCard';
import event_img from "../img/event_img.svg";
import dining_img from "../img/dining_img.jpg";
import london from "../img/london.jpg";
import losAngeles from "../img/los-angeles.jpg";
import NewYorkCity from "../img/new-york-city.jpg";
import berlin from "../img/berlin.jpg";
import user from "../img/user.png";
import back from "../img/back-img.jpg";
import { Link } from 'react-router-dom';


const Home =() => {
    return (
        <>

          {/* Search box */}
          <div className="jumbotron text-center"><h3 className="heading">EXPLORE VEGETARIAN WORLD</h3>
          <div className="active-cyan-3 w-75 mx-auto mt-4">
          <input className="form-control" type="text" placeholder="Search" />
          </div>
          </div>

          {/* search box end */}
          {/* section start */}

          <section className="align-item-center mb-5">
          <div className="row">
          <div className="col-lg-6 col-md-12 mt-md-5 my-5 d-flex text-center justify-content-center flex-column">
          <h3 className="heading">Vegetarian Culinary <br />Festival in Poznań</h3>
          <p className="mt-3 px-5" style={{fontSize:'20px', lineHeight:'1.6'}}>Solution is an easy to use tool for SEO. With the help of our system you can present your website. It is all very easy!</p>
          <Link className="button mx-auto mt-4" to="/about">About us</Link>
          </div>
          <div className="col-lg-6 col-md-12">
          <img src={event_img} alt="event" />
          </div>
          </div>
          </section>

          {/* End section */}
          {/* top Restaurants section */}

        <div className="section py-5">
          <div className="text-center pt-3">
           <h3 className="heading">Top Restaurants Near Me</h3>
          </div>
          <div className="row pb-5">
          <RestCard rest_img={dining_img} title="Swati Snacks" desc="Some quick example text to build on the card title and make up the bulk of the card's content." btn="Go somewhere" />
          <RestCard rest_img={dining_img} title="Seva Cafe" desc="Vegetarian cafe serving coffee, shakes, mocktails and beverages plus fast foods like pizza, pasta." btn="Go somewhere" />
          <RestCard rest_img={dining_img} title="The Vegan Kitchen" desc="Some quick example text to build on the card title and make up the bulk of the card's content." btn="Go somewhere" />
          </div>
        </div>

         {/* End top Restaurants section */}
         {/* Top Vegan Friendly Cities */}

         <div className="my-5">
          <div className="text-center pt-3">
           <h3 className="heading">Top Vegan Friendly Cities</h3>
          </div>
          <div className="row">
          <div className="col-11 rest_card col-md-5 col-lg-3 mx-auto text-center mt-5">
           <img className="card-img-top city_img" src={london} alt="dining" />
           <div className="text_img">London</div>
          </div>
          <div className="col-11 rest_card col-md-5 col-lg-3 mx-auto text-center mt-5">
           <img className="card-img-top city_img" src={berlin} alt="dining" />
           <div className="text_img">Berlin</div>
          </div>
          <div className="col-11 rest_card col-md-5 col-lg-3 mx-auto text-center mt-5">
           <img className="card-img-top city_img" src={NewYorkCity} alt="dining" />
           <div className="text_img">New York City</div>
          </div>
          <div className="col-11 rest_card col-md-5 col-lg-3 mx-auto text-center mt-5">
           <img className="card-img-top city_img" src={losAngeles} alt="dining" />
           <div className="text_img">los Angeles</div>
          </div>
          </div>
        </div>

         {/* End Top Vegan Friendly Cities */}
         {/* register Restaurants */}
         <div className="py-5 mt-5" style={{backgroundImage: `url(${back})`}}>
           <div className="back-text back-text py-5"><p>View, Organize and Prioritize All of your Team’s Projects</p>
         <h3 className="mt-4" style={{lineHeight:'48px'}}>5,000,000+ organizations are Globally<br />
         already using Being Vegetarian</h3>
         <div className="mt-5">
         <Link className="button" to="/about">About us</Link></div>
         </div>
         </div>

         {/* end register Restaurants */}
         {/* Price Plan */}

         <div className="py-5 section">
          <div className="text-center py-3">
           <h3 className="heading mb-4">Our Best Price Plan</h3>
          </div>
          <div className="row pb-5">
          {/* price card one */}
          <div className="col-11 rest_card col-md-5 col-lg-3 mx-auto text-center mt-4">
           <div className="price-body">
           <div className="choice-box">Popular Choice</div>
                <div className="table-header">
                    <h3 className="title">Standard</h3>
                    <div className="text">on the other hand</div>
                    <h2 className="price my-3">$100<span> Per Month</span></h2>
                </div>
                <div className="table-content">
                  <p>Free Customer Support</p>
                  <p>Free installation</p>
                  <p>Free Back-up</p>
                  <p>-</p>
                  <p>-</p>
                </div>
                <div className="my-4"><Link to="/" className="button">Buy Now</Link></div>
           </div>
          </div>
          {/* price card two */}
          <div className="col-11 rest_card col-md-5 col-lg-3 mx-auto text-center mt-4">
           <div className="price-body">
           <div className="choice-box">Popular Choice</div>
                <div className="table-header">
                    <h3 className="title">Standard</h3>
                    <div className="text">on the other hand</div>
                    <h2 className="price my-3">$100<span> Per Month</span></h2>
                </div>
                <div className="table-content">
                  <p>Free Customer Support</p>
                  <p>Free installation</p>
                  <p>Free Back-up</p>
                  <p>-</p>
                  <p>-</p>
                </div>
                <div className="my-4"><Link to="/" className="button">Buy Now</Link></div>
           </div>
          </div>
          {/* price card three */}
          <div className="col-11 rest_card col-md-5 col-lg-3 mx-auto text-center mt-4">
           <div className="price-body">
           <div className="choice-box">Popular Choice</div>
                <div className="table-header">
                    <h3 className="title">Standard</h3>
                    <div className="text">on the other hand</div>
                    <h2 className="price my-3">$100<span> Per Month</span></h2>
                </div>
                <div className="table-content">
                  <p>Free Customer Support</p>
                  <p>Free installation</p>
                  <p>Free Back-up</p>
                  <p>-</p>
                  <p>-</p>
                </div>
                <div className="my-4"><Link to="/" className="button">Buy Now</Link></div>
           </div>
          </div>
          </div>
          </div>

         {/* End Price Plan */}
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


export default Home;