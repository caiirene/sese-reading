import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    {/* Other navigation links */}
    <Link to="/book">BookCard</Link>
  </nav>
);

export default NavBar;