import React from 'react';
import {
  BrowserRouter as Router,
  Routes, // <-- use Routes instead of Switch
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Home from './Containers/Home/Home';
import BookCard from './Components/BookCard/Bookcard';
import BookShowcase from './Components/BookShowcase/BookShowcase';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/book">BookCard</Link>
          <Link to="/bookshowcase">BookShowcase</Link>
        </nav>
        {/* New way to define routes in v6 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookCard />} />
          <Route path="/bookshowcase" element={<BookShowcase />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
