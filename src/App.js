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

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/book">BookCard</Link>
          <Link to="/authorzone">AuthorZone</Link>
          <Link to="/bookshowcase">BookShowcase</Link>
        </nav>
        {/* New way to define routes in v6 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookCard />} />
          <Route path="/authorzone" element={<AuthorZone />} />
          <Route path="/bookshowcase" element={<BookShowcase />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
