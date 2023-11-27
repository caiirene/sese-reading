import React from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Home from './Containers/Home/Home';
import BookCard from './Components/BookCard/Bookcard';
import BookShowcase from './Components/BookShowcase/BookShowcase';
import AuthorZone from './Components/AuthorZone/AuthorZone';
import Myworks from './Components/Myworks/Myworks';
import CreateWork from './Components/CreateWork/CreateWork';
import BookShowcaseAdministrators from './Components/BookShowcaseAdministrators/BookShowcaseAdministrators';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/book">BookCard</Link>
          <Link to="/authorzone">AuthorZone</Link>
          <Link to="/bookshowcase">BookShowcase</Link>
          <Link to="/myworks">Myworks</Link>
          <Link to="/creatework">CreateWork</Link>
          <Link to="/bookshowcaseadministrators">BookShowcaseAdministrators</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookCard />} />
          <Route path="/authorzone" element={<AuthorZone />} />
          <Route path="/myworks" element={<Myworks />} />
          <Route path="/creatework" element={<CreateWork />} />
          <Route path="/bookshowcase" element={<BookShowcase />} />
          <Route path="/bookshowcaseadministrators" element={<BookShowcaseAdministrators />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
