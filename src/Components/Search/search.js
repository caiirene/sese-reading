import React, { useState, useEffect } from "react";
import Card from "./card";
import axios from "axios";

function SearchBook() {
  const [search, setSearch] = useState("");
  const [bookData, setBook] = useState([]);

  useEffect(() => {
    const storedBookData = JSON.parse(localStorage.getItem("bookData"));
    if (storedBookData) {
      setBook(storedBookData);
    }
  }, []);

  const searchBook = (e) => {
    if (search.trim() !== "") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyASI4McIODQ9y7FRxRndxEWy3R-gqKYDi8" +
            "&maxResults=40"
        )
        .then((res) => {
          const newBookData = res.data.items;
          setBook(res.data.items);
          console.log(res.data.items);
          localStorage.setItem("bookData", JSON.stringify(newBookData));
        });
    } else {
      alert("Please enter a book name before searching.");
    }
  };

  return (
    <div className="mt-3">
      <h3>Find Your Book!</h3>
      <div className="d-flex align-content-center justify-content-center mt-4">
        <input
          type="text"
          className="form-control w-50 border border-secondary"
          placeholder="Enter Your Book Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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
      </div>
    </div>
  );
}

export default SearchBook;
