import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Containers/Home/Home";
import BookCard from "./Components/BookCard/Bookcard";
import BookShowcase from "./Components/BookShowcase/BookShowcase";
import AuthorZone from "./Components/AuthorZone/AuthorZone";
import Myworks from "./Components/Myworks/Myworks";
import CreateWork from "./Components/CreateWork/CreateWork";
import BookShowcaseAdministrators from "./Components/BookShowcaseAdministrators/BookShowcaseAdministrators";
import Signin from "./Components/users/signin";
import Signup from "./Components/users/signup";
import Account from "./Components/users/account";
import UserTable from "./Components/users/table";
import NavBar from "./Components/NavBar/NavBar";
import Search from "./Components/Search/search";
import Detail from "./Components/Search/detail";
import store from "../src/Components/books/store";
import { Provider } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as client from "../src/Components/books/client";
function App() {
  const [books, setBooks] = useState([]);
  const API_BASE = "http://localhost:56100/api";
  const URL = `${API_BASE}/books`;

  const findAllBooks = async () => {
    try {
      const response = await client.findAllBooks();
      setBooks(response);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    findAllBooks();
  }, []);
  const [book, setBook] = React.useState({
    name: "New book",
    description: "book description",
    author: "book author",
  });

  const addBook = async () => {
    const response = await axios.post(URL, book);
    setBooks([...books, response.data]);
  };
  const deleteBook = async (bookId) => {
    try {
      await axios.delete(`${URL}/${bookId}`);
      setBooks((prevBooks) => prevBooks.filter((c) => c._id !== bookId));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
  

  const updateBook = async () => {
    const response = await axios.put(`${URL}/${book._id}`, book);

    setBooks(
      books.map((c) => {
        if (c._id === book._id) {
          return book;
        } else {
          return c;
        }
      })
    );
  };
  
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  book={book}
                  books={books}
                  setBook={setBook}
                  addBook={addBook}
                  deleteBook={deleteBook}
                  updateBook={updateBook}
                />
              }
            />
            <Route path="/book" element={<BookCard />} />
            <Route path="/authorzone" element={<AuthorZone />} />
            <Route path="/myworks" element={<Myworks />} />
            <Route path="/creatework" element={<CreateWork />} />
            <Route path="/bookshowcase" element={<BookShowcase />} />
            <Route
              path="/bookshowcaseadministrators"
              element={<BookShowcaseAdministrators />}
            />

            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />

            <Route path="/detail/:bookId" element={<Detail />} />

            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
