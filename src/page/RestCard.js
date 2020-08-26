import React from 'react'
import { Link } from 'react-router-dom'

function RestCard(props) {
    return (
    <>

        {/* card */}
        <div className="col-11 rest_card col-md-5 col-lg-3 mx-auto text-center mt-5">
           <img className="card-img-top" src={props.rest_img} alt="dining" />
           <div className="card-body">
           <h5 className="card-title">{props.title}</h5>
           <p className="card-text">{props.desc}</p>
           <div className="my-4"><Link to="/" className="button">{props.btn}</Link></div>
           </div>
          </div>
          {/* end card */}

    </>
    )
}

export default RestCard
