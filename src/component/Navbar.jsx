import React from 'react'
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div><nav classname="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm">
    <div classname="container">
      <NavLink classname="navbar-brand fw=bold fs-4" to="/">
        MyCollection
        </NavLink>
      <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span classname="navbar-toggler-icon"></span>
      </button>
      <div classname="collapse navbar-collapse" id="navbarSupportedContent">
        <ul classname="navbar-nav mx-auto mb-2 mb-lg-0">
          <li classname="nav-item">
            <NavLink classname="nav-NavLink active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li classname="nav-item">
            <NavLink classname="nav-NavLink" to="/products">Products</NavLink>
          </li>
          
          <li classname="nav-item">
            <NavLink classname="nav-NavLink" to="/about">About</NavLink>
          </li>
          <li classname="nav-item">
            <NavLink classname="nav-NavLink" to="/contact">Contact</NavLink>
          </li>
          
          
        </ul>
      <div className="buttons">
        <NavLink to="/login" className="btn btn-outline-dark">
            <i className="fa fa-sign-in me-1"></i>Login</NavLink>
            <NavLink to="/register" className="btn btn-outline-dark">
            <i className="fa fa-user-plus me-1"></i>Register</NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2" >
            <i className="fa fa-shopping-cart me-1"></i>Cart (0)</NavLink>
      </div>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar