import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";

const About = () => {
  return (
    <>
      <Hero text="About Us" />
      <Link to="/Home">Go to Home</Link>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit, 
              amet consectetur adipisicing elit. Officia vitae dicta 
              reprehenderit consectetur incidunt. 
              Vitae possimus ullam explicabo magni sequi! 
              Error ratione quod sint pariatur veritatis consequatur est sunt delectus?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
