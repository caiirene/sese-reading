import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      {/* Other navigation links */}
      <Link to="/book">BookCard</Link>
      <Link to="/authorzone">AuthorZone</Link>
      <Link to="/bookshowcase">BookShowcase</Link>
      <Link to="/myworks">Myworks</Link>
      <Link to="/creatework">CreateWork</Link>
      <Link to="/bookshowcaseadministrators">BookShowcaseAdministrators</Link>

      {/* User navigation links */}
      <Link to="/signin">signin</Link>
      <Link to="/signup">signup</Link>

      
    </nav>
  );
}

export default NavBar;
