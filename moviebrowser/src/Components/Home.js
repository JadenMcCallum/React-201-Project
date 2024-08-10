import React from "react";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Hello From React 201" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              aut accusantium modi expedita perferendis, dolorem odit
              necessitatibus error molestias voluptate natus rem ratione
              suscipit dolor nam amet quasi tempora quae!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
