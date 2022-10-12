import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div classname="card bg-dark text-white border-0">
        <img src="/assets/bg.jpg" classname="card-img" alt="Background" 
        height='550px'/>
        <div classname="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
          <h5 classname="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
          <p classname="card-text lead fs-2">
            CHECK ALL TRENDS
          </p>
          
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}
