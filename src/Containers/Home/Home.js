import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import FeatureBooks from "../../Components/books/featureBooks";
function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Bookstore</h1>
      </header>
      <div className="bg-body-tertiary">
        <div className="row mx-5 ">
          <div className="col-md-6 d-none d-md-block">
            <FeatureBooks />
          </div>
          <div className="col-md-6 d-block d-flex justify-content-center align-items-center">
            <div className="">
              <p className="text-center">
                Embark on a literary journey where every page tells a story.
              </p>
              <Link to="/all-books" className="text-decoration-none">
                <button className="explore-button">Explore All Books</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
