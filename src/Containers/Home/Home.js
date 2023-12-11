import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import BookList from "../../Components/books/bookList";
=======
>>>>>>> zijunBranch
function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Bookstore</h1>
      </header>
      <section className="home-content">
        <h2>Book List</h2>
      </section>
<<<<<<< HEAD
      <BookList />
=======

>>>>>>> zijunBranch
    </div>
  );
}

export default Home;
