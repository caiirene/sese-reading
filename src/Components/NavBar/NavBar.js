import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate, Link, useParams } from "react-router-dom";
function NavBar() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const [userRole, setUserRole] = useState("USER");

  /*const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
    setUserRole(account.role)
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);*/

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
          <ul className="nav nav-underline">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/book" exact>
                BookCard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/authorzone" exact>
                AuthorZone
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/bookshowcase" exact>
                BookShowcase
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/myworks" exact>
                Myworks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/creatework" exact>
                CreateWork
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/bookshowcaseadministrators"
                exact
              >
                bookshowcaseadministrators
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search" exact>
                search
              </NavLink>
            </li>

            
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/users" exact>
                Manage Users
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/books" exact>
                Manage Books
              </NavLink>
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


/*{userRole === "ADMIN" &&
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/users" exact>
                Manage Users
              </NavLink>
            </li>}*/