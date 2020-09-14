import React from 'react';
import logo from "../img/logo.svg"
import { NavLink } from 'react-router-dom';
const Navbar =() => {
    return (
      <>
<nav className="navbar  sticky-top navbar-expand-lg navbar-light bg-light text-uppercase">
  <NavLink exact className="navbar-brand" to="/"><img src={logo} alt="logo" height="60px" width="120px" /></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse text-center font-weight-bold ml-lg-5" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item p-3">
        <NavLink className="nav-link" exact activeClassName="active_nav" to="/">Home</NavLink>
      </li>
      <li className="nav-item p-3">
        <NavLink className="nav-link" exact activeClassName="active_nav" to="/about">About us</NavLink>
      </li>
      <li className="nav-item p-3">
        <NavLink className="nav-link" exact activeClassName="active_nav" to="/fd"  aria-disabled="true">COMMUNITY</NavLink>
      </li>
      <li className="nav-item p-3">
        <NavLink className="nav-link" exact activeClassName="active_nav" to="/re"  aria-disabled="true">RESTAURANTS</NavLink>
      </li>
      <li className="nav-item p-3">
        <NavLink className="nav-link" exact activeClassName="active_nav" to="/fer"  aria-disabled="true">EVENTS</NavLink>
      </li>
      <li className="nav-item p-3">
        <NavLink className="nav-link" exact activeClassName="active_nav" to="/egerg"  aria-disabled="true">VEGETARIANISM</NavLink>
      </li>
    </ul>
    <span className="nav-item p-3 text-center">
    <NavLink className="nav-link login_nav" exact activeClassName="active_nav" to="/Register"  aria-disabled="true">Login/Register</NavLink>
    </span>

  </div>
</nav>

      </>
    );
  }


export default Navbar;