import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import AdminUserTable from "./Components/users/admintable";
import NavBar from "./Components/NavBar/NavBar";
import Search from "./Components/Search/search";
import Detail from "./Components/Search/detail";
import store from "../src/Components/books/store";
import BookList from "./Components/books/bookList";
//import Admin from "./Components/admintest/admin";
//import UserTable from "./Components/admintest/table";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
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
            

            <Route path="/detail/:bookId" element={<Detail />} />

            <Route path="/search" element={<Search />} />

            <Route path="/admin/users" element={<AdminUserTable />} />
            <Route path="/admin/books" element={<BookList />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

//<Route path="/admin/users" element={<UserTable />} />

export default App;
