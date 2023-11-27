import React from 'react';
import './Home.css'; // Make sure the path is correct based on your project structure

// Import any other components you want to use on the Home page
import NavBar from '/Users/Andrea/Desktop/sese-reading-main/src/Components/NavBar/NavBar.js';

function Home() {


  return (
    <div className="home">
      <NavBar /> {}
      <header className="home-header">
        <h1>Welcome to My Bookstore</h1>
      </header>
      <section className="home-content">
        {}
        {}
      </section>
      {/* ... other sections, footer, etc. ... */}
    </div>
  );
}

export default Home;
