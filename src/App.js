import React from "react";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./App.css";
import { useEffect, useState } from "react";
import Home from "./Containers/Home/Home";
import BookCard from "./Components/BookCard/Bookcard";
import BookShowcase from "./Components/BookShowcase/BookShowcase";
import AuthorZone from "./Components/AuthorZone/AuthorZone";
import Myworks from "./Components/Myworks/Myworks";
import EditBook from "./Components/EditBook/EditBook";
import EditChapter from './Components/EditChapter/EditChapter';
import CreateWork from "./Components/CreateWork/CreateWork";
import CreateChapter from "./Components/CreateChapter/CreateChapter";
import BookShowcaseAdministrators from "./Components/BookShowcaseAdministrators/BookShowcaseAdministrators";
import Signin from "./Components/users/signin";
import Signup from "./Components/users/signup";
import Account from "./Components/users/account";
import UserTable from "./Components/users/table";
import NavBar from "./Components/NavBar/NavBar";
import Search from "./Components/Search/search";
import Detail from "./Components/Search/detail";
import store from "../src/Components/books/store";
import BookList from "./Components/books/bookList";
import { Provider } from "react-redux";
import Profile from "./Components/Account/profile";
import BookAdmin from "./Components/BookAdmin/bookadmin";
import AuthorProfile from "./Components/Account/authorProfile";
import ReadBook from "./Components/ReadBook/ReadBook";
import ReadChapter from "./Components/ReadChapter/ReadChapter";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/book/:bookId" element={<BookCard />} />
            <Route path="/readchapter/:chapterId" element={<ReadChapter />} />
            <Route path="/readbook/:bookId" element={<ReadBook />} />

            <Route path="/authorzone" element={<AuthorZone />} />
            <Route path="/myworks" element={<Myworks />} />
            <Route path="/editbook/:bookId" element={<EditBook />} />
            <Route path="/editchapter/:chapterId" element={<EditChapter />} />
            <Route path="/creatework" element={<CreateWork />} />
            <Route path="/createchapter/:bookId" element={<CreateChapter />} />
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
            <Route path="/search/:keyword" element={<Search />} />

            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/admin/books" element={<BookAdmin />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/author/:author" element={<AuthorProfile />} />

          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}

//<Route path="/admin/users" element={<UserTable />} />

export default App;
