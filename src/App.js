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

function App() {
  return (
    <Router>
      <div className="App">
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
          <Route path="/admin/users" element={<UserTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
