import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "./WebLogo.png";

function NavBar() {

  const [logo,setLogo] = useState(Logo);

  const getInitialUser = () => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser !== undefined) {
      try {
        return JSON.parse(storedUser);
      } catch (error) {
        console.error('Error parsing user data from local storage', error);
        return null;
      }
    }
    return null;
  };

  const [user, setUser] = useState(getInitialUser());
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(getInitialUser());
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const signOut = async () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    navigate("/");
  };
  const signIn = async () => {
    navigate("/signin");
  };
  const signUp = async () => {
    navigate("/signup");
  };


  const renderNavLinks = () => {
    switch (user?.role) {
      case 'reader':
        return (
          <>
            <NavLink className="nav-link" to="/" exact style={{ marginRight: '20px' }}>Home</NavLink>
            <NavLink className="nav-link" to="/profile" exact style={{ marginRight: '20px' }}>Profile</NavLink>
            <NavLink className="nav-link" to="/bookshowcase" exact style={{ marginRight: '20px' }}>Book Showcase</NavLink>
            <NavLink className="nav-link" to="/search" exact style={{ marginRight: '20px' }}>Search</NavLink>
          </>
        );
      case 'author':
        return (
          <>
            <NavLink className="nav-link" to="/" exact style={{ marginRight: '20px' }}>Home</NavLink>
            <NavLink className="nav-link" to="/profile" exact style={{ marginRight: '20px' }}>Profile</NavLink>
            <NavLink className="nav-link" to="/myworks" exact style={{ marginRight: '20px' }}>My Works</NavLink>
            <NavLink className="nav-link" to="/creatework" exact style={{ marginRight: '20px' }}>Create Work</NavLink>
          </>
        );
      case 'admin':
        return (
          <>
            <NavLink className="nav-link" to="/" exact style={{ marginRight: '20px' }}>Home</NavLink>
            <NavLink className="nav-link" to="/admin/users" exact style={{ marginRight: '20px' }}>Manage Users</NavLink>
            <NavLink className="nav-link" to="/admin/books" exact style={{ marginRight: '20px' }}>Manage Books</NavLink>
          </>
        );
      default:
        return <NavLink className="nav-link" to="/" exact style={{ marginRight: '20px' }}>Home</NavLink>;
    }
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#e3f2fd", fontFamily: "'Open Sans', sans-serif" }}>
  <div className="container-fluid">
    <img src={logo} width="45" height="45" className="navbar-brand"/>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mr-auto">
        {renderNavLinks()}
      </ul>
    </div>

    <div className="d-flex">
      {user === null ? (
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link btn btn-info ms-2" onClick={signIn}>Sign In</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-info ms-2" onClick={signUp}>Sign up</a>
          </li>
        </ul>
      ) : (
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link btn btn-info" onClick={signOut}>Sign Out</a>
          </li>
        </ul>
      )}
    </div>
  </div>
</nav>

  );
}

export default NavBar;

