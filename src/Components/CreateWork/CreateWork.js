import React, { useState, useEffect } from 'react';
import DefaultImage from '../ToolImages/defaultimage.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import './CreateWork.css';
import * as client from "../users/client";

const CreateBook = () => {
  const BOOKS_API_BASE = "http://localhost:4000/api/books/";
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState(DefaultImage);
  const [account, setAccount] = useState(null); // Account state to store user data

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchAccount = async () => {
      const curAccount = await client.account(); // Adjust this to correctly fetch account data
      setAccount(curAccount);
    };

    fetchAccount();
  }, []);


  const handleSaveBook = () => {
    if (!account) {
      enqueueSnackbar('User account information not available', { variant: 'error' });
      return;
    }

    const formData = new FormData();
    formData.append('name', title);
    formData.append('description', description);
    formData.append('author', account._id); // Use user's ID as author
    formData.append('authorName', account.name); // Use user's name as authorName
    formData.append('pubDate', new Date().toISOString()); // Set current time as publication date

    axios.post(BOOKS_API_BASE, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(() => {
      enqueueSnackbar('Book Created successfully', { variant: 'success' });
      navigate('/destination-page'); // Navigate to desired page
    })
    .catch((error) => {
      enqueueSnackbar('Error creating book', { variant: 'error' });
      console.error("Error creating book:", error);
    });
  };

  return (
    <div className='create-book-container'>

      {/* Title Input */}
      <div className='input-container'>
          <label className='input-label'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='text-input'
            placeholder='Enter book title, within 15 words, please do not add special symbols such as book titles.'
          />
        </div>

      {/* Description Input */}
      <div className='input-container'>
        <label className='input-label'>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='text-input'
          placeholder='Enter description, within 500 words.'
        />
      </div>

      <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
        Save
      </button>
    </div>
  );
};

export default CreateBook;
