import React, { useState } from "react";
import Card from "./card";
import axios from "axios";
<<<<<<< HEAD

=======
>>>>>>> zijunBranch
// test on search function using the google book api, working on...

function SearchBook() {
  const [search, setSearch] = useState("");
  const [bookData, setBook] = useState([]);
  const searchBook = (e) => {
<<<<<<< HEAD
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=AIzaSyASI4McIODQ9y7FRxRndxEWy3R-gqKYDi8" +
          "&maxResults=40"
      )
      .then((res) => {
        setBook(res.data.items);
        console.log(res.data.items);
      });
  };

  return (
    <div className="mt-3">
      <h3>Find Your Book!</h3>
      <div className="d-flex align-content-center justify-content-center mt-4">
=======
    axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyASI4McIODQ9y7FRxRndxEWy3R-gqKYDi8'+'&maxResults=40').then((res) => {
      setBook(res.data.items);
      console.log(res.data.items);
    });
  };


  return (
    <div className="mt-3">
      <h3>Find Your Book!</h3>
      <div className="d-flex align-content-center justify-content-center">
>>>>>>> zijunBranch
        <input
          type="text"
          className="form-control w-50 border border-secondary"
          placeholder="Enter Your Book Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
<<<<<<< HEAD
        <div>
          <button
            className="btn btn-outline-primary ms-1"
            style={{ width: "5rem", height: "3rem" }}
            onClick={searchBook}
          >
            Search
          </button>
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap row row-cols-auto mt-2 ms-5">
        {<Card book={bookData} />}
=======
        <button className="btn btn-secondary ms-1" style={{ width: "100px" }} onClick={searchBook}>
          Search
        </button>
      </div>
      <div className="d-flex flex-row flex-wrap row row-cols-auto mt-2 ms-5">
        {
          <Card book={bookData} />
        }
>>>>>>> zijunBranch
      </div>
    </div>
  );
}

export default SearchBook;
<<<<<<< HEAD


=======
>>>>>>> zijunBranch
