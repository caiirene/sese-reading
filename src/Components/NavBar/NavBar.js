import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#e3f2fd" }} 
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          LOGO NAME?
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/book">
              BookCard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/authorzone">
              AuthorZone
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bookshowcase">
              BookShowcase
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/myworks">
              Myworks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/creatework">
              CreateWork
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bookshowcaseadministrators">
              bookshowcaseadministrators
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/search">
              search
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item flow-end btn btn-info">
              <a className="nav-link" href="/signin">
                Sign In
              </a>
            </li>
            <li className="nav-item btn btn-info ms-2">
              <a className="nav-link" href="/signup">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default NavBar;
