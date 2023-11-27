import './CreateWork.css'; 
import React, { useState } from 'react';
import DefaultImage from '../ToolImages/defaultimage.png'; 


function CreateWork() {
  const [coverImage, setCoverImage] = useState(DefaultImage);

const handleImageChange = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    setCoverImage(reader.result);
  };
  if (file) {
    reader.readAsDataURL(file);
  }
};

  return (
    <div className="my-works-container">
         <header className="my-works-header">
      <div className="upload-container">
        <label htmlFor="cover-image-upload" className="upload-label">
          <img src={coverImage} alt="Cover" className="cover-image-preview" />
        </label>
        <input
          type="file"
          id="cover-image-upload"
          name="coverImage"
          accept="image/*"
          className="cover-image-input"
          onChange={handleImageChange}
        />
      </div>
      <h1 className="screen-title">Create a new work</h1>
    </header>

      <main className="my-works-content">
  <form className="input-form">
    <div className="input-group">
      <label htmlFor="bookTitle" className="input-label">Create book title:</label>
      <input
        type="text"
        id="bookTitle"
        name="bookTitle"
        placeholder="Within 15 words, special characters are not supported"
        maxLength="15"
        className="text-input"
      />
    </div>
    
    <div className="input-group">
      <label htmlFor="authorName" className="input-label">Author's pen name:</label>
      <input
        type="text"
        id="authorName"
        name="authorName"
        placeholder="Cannot be modified after first creation"
        className="text-input"
      />
    </div>

    <button type="submit" className="main-button">Start creating</button>
  </form>
</main>
    </div>
  );
}

export default CreateWork;
