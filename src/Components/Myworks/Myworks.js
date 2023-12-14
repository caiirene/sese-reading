import React from 'react';
import './Myworks.css';
import writing from '../ToolImages/writing.png';

function Myworks() {
  return (
    <div className="component-container">
      <div className="content-wrapper">
        <img src={writing} alt="Cute character working" className="centered-image" />
        <p className="text-message">You have no works yet!</p>
        <button className="action-button">Start writing</button>
      </div>
    </div>
  );
}

export default Myworks;
