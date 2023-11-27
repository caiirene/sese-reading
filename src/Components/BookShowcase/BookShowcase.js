import React from 'react';
import './BookShowcase.css'; // Make sure to have the CSS file in the same directory

function BookShowcase() {
  // This is a mock data array to simulate fetching book data
  const books = [
    { name: 'Book Name', intro: 'Book Intro', image: 'https://source.unsplash.com/random/300x200', tags: 'tags' },
    { name: 'Another Book', intro: 'Another Intro', image: 'https://source.unsplash.com/random/300x200', tags: 'more tags' },
    { name: 'Third Book', intro: 'Third Book Intro', image: 'https://source.unsplash.com/random/300x200', tags: 'even more tags' }
  ];

  return (
    <div className="book-showcase">
      <header>
        <input type="search" placeholder="Label here..." />
      </header>
      <button className="writer-button" onClick={() => { /* logic to go to writer page */ }}>
            go to writer page
      </button>

      <section className="recommendation">
        <h2>Recommendation 👍👍👍👍</h2>
        {books.map((book, index) => (
          <article key={index} className="book-item">
            <img src={book.image} alt="Book" />
            <div className="book-info">
              <h3>{book.name}</h3>
              <p>{book.intro}</p>
              <p>{book.tags}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="whats-new">
        <h2>What's New 📚</h2>
        <div className="book-row">
          {/* Repeat for each new book */}
          <div className="book">
            <img src="https://source.unsplash.com/random/100x100" alt="New Book" />
            <span>Book name</span>
          </div>
        </div>
      </section>

      <h2 className="ranking-title">Ranking List 🏆</h2>
      <section className="ranking-list">
  <div className="book-row">
    {/* Repeat for each book */}
    <div className="book">
      <img src="https://source.unsplash.com/random/100x100" alt="Ranked Book"/>
      <span>Book name</span>
    </div>
  </div>
</section>
    </div>
  );
}

export default BookShowcase;
