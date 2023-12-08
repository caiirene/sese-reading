import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
function Home({ book, books, setBook, addBook, deleteBook, updateBook }) {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Bookstore</h1>
      </header>
      <section className="home-content">
        <h2>Book List</h2>
      </section>
      <div>

        <input
          value={book.name}
          className="form-control"
          onChange={(e) => setBook({ ...book, name: e.target.value })}
        />
        <input
          value={book.description}
          className="form-control"
          onChange={(e) => setBook({ ...book, description: e.target.value })}
        />
        <input
          value={book.author}
          className="form-control"
          onChange={(e) => setBook({ ...book, author: e.target.value })}
        />
        <hr />
        <button onClick={addBook}>Add</button>
        <button onClick={updateBook}>Update</button>
        <div className="row d-flex justify-content-start flex-wrap">
          {books.map((book) => (
            <div
              key={book._id}
              className="col-auto ms-5 mt-4 mb-4"
              style={{ width: "260px" }}
            >
              <div className="card h-100">
                <div style={{ backgroundColor: "#a183d7", height: "150px" }}>
                  <i className="fa-solid fa-ellipsis-vertical float-end me-4 pt-4 text-white fa-lg"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{book.name}</h5>

                  <p className="card-text">
                    {book.name}
                    <br />
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteBook(book);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        setBook(book);
                      }}
                    >
                      Edit
                    </button>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
