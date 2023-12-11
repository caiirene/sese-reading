import "./bookcard.css";
import BookImage from "../BookImages/book-image.png";
import React, { useEffect, useState } from "react";
import * as client from "../books/client";
import { useParams } from "react-router-dom";

function BookCard() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  const fetchBookDetails = async () => {
    try {
      const bookDetails = await client.findBookById(bookId);
      console.log("Book Details:", bookDetails);
      setBook(bookDetails);
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, [bookId]);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100); // Random number between 0 and 99
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-card">
      <div className="book-card-image-wrapper">
        <div className="book-card-header" key={book.id}>
          <img className="book-card-image" src={book.coverImage} alt="" />

          <div className="book-card-details">
            <h1 className="book-card-title">{book.title}</h1>
            <h2 className="book-card-author">{book.authorName}</h2>
            <div className="book-card-update">Update word count</div>
          </div>
        </div>
        <div className="book-card-buttons-and-text">
          <div className="button-and-text">
            <button className="image-button">
              🔥&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Popularity
            </button>
            <div className="button-text">Weekly Click {getRandomNumber()}</div>
            <div className="button-text">Monthly Click {getRandomNumber()}</div>
          </div>
          <div className="button-and-text">
            <button className="image-button">
              🔥&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reward
            </button>
            <div className="button-text">Weekly Click {getRandomNumber()}</div>
            <div className="button-text">Monthly Click {getRandomNumber()}</div>
          </div>
          <div className="button-and-text">
            <button className="image-button">
              🔥&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comment
            </button>
            <div className="button-text">Weekly Click {getRandomNumber()}</div>
            <div className="button-text">Monthly Click {getRandomNumber()}</div>
          </div>
        </div>
        <div className="book-card-paragraphs">
          <p>
            <strong>Introduction</strong>
            <br />
            <span>{book.introduction}</span>
          </p>
          <p>
            <strong>Comment</strong>
            <br />
            <div class="col">
              <textarea class="form-control" id="textarea1" rows="3"></textarea>
            </div>
          </p>
        </div>
        <div className="book-card-action-buttons">
          <button className="action-button">Start Reading</button>
          <button className="action-button">Add to book shelf</button>
        </div>
      </div>
      <div className="book-card-details"></div>
    </div>
  );
}

export default BookCard;
