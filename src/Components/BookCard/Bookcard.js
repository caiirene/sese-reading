import React from 'react';
import './bookcard.css'; // This is where your CSS or SASS file is
import BookImage from '../BookImages/book-image.png';

function BookCard({ title, author, intro}) {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100); // Random number between 0 and 99
  };

  return (
    <div className="book-card">
      <div className="book-card-image-wrapper">
        <img src={BookImage} alt={title} className="book-card-image" />
        <div className="book-card-buttons-and-text">
          <div className="button-and-text">
            <button className="image-button">🔥&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人气</button>
            <div className="button-text">周点击 {getRandomNumber()}</div>
            <div className="button-text">月点击 {getRandomNumber()}</div>
          </div>
          <div className="button-and-text">
            <button className="image-button">🔥&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;打赏</button>
            <div className="button-text">周点击 {getRandomNumber()}</div>
            <div className="button-text">月点击 {getRandomNumber()}</div>
          </div>
          <div className="button-and-text">
            <button className="image-button">🔥&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;评论</button>
            <div className="button-text">周点击 {getRandomNumber()}</div>
            <div className="button-text">月点击 {getRandomNumber()}</div>
          </div>
        </div>
        <div className="book-card-paragraphs">
          <p><strong>Introduction</strong><br/><span>Content for paragraph three goes here.</span></p>
          <p><strong>目录</strong><br/><span>Content for paragraph three goes here.</span></p>
          <p><strong>评论</strong><br/><span>Content for paragraph three goes here.</span></p>
       </div>
       <div className="book-card-action-buttons">
        <button className="action-button">Start Reading</button>
        <button className="action-button">Add to book shelf</button>
      </div>
       
      </div>
      <div className="book-card-details">
        <h1 className="book-card-title">Book name</h1>
        <h2 className="book-card-writer">Writer</h2>
        <div className="book-card-update">更新字数</div>
      </div>
    </div>
  );
}

export default BookCard;
