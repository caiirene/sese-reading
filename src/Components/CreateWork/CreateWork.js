import React, { useState, useEffect } from 'react';
import DefaultImage from '../ToolImages/defaultimage.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import './CreateWork.css';
import * as client from "../users/client";

const CreateBook = () => {
  // Assume the user is authenticated and their ID is available
  const BOOKS_API_BASE = "http://localhost:56100/api/books/";
  const [user, setUser] = useState(null); // State to store user data
  const [title, setTitle] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [coverImage, setCoverImage] = useState(DefaultImage);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [account, setAccount] = useState(null);
  const [booksList, setBooksList] = useState([]);

  const fetchAccount = async () => {
    const curAccount = await client.account();
    setAccount(curAccount);
  };
  const fetchAllBooksFromAuthor = async (authorId) => {
    try {
      const response = await axios.get(`${BOOKS_API_BASE}author/${authorId}`);
      setBooksList(response.data); // 假设书籍数据在 response.data 中
    } catch (error) {
      console.error("Error fetching books in <MyWork/>fetchAllBooksFromAuthor:", error);
      // 可以设置一个错误状态来显示错误信息
    }
  };

  useEffect(() => {
    fetchAccount();
    console.log("hello!!!!!!!!!!!!");
  }, []);

  useEffect(() => {
    if (account && account._id) {
      console.log("aaaaaaa!!!!!!!!!!!!");
      //console.log("Account ID:", account._id); // 打印 account._id
      fetchAllBooksFromAuthor(account._id);
    }
  }, [account]);

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

  const handleSaveBook = () => {
    const data = {
      title,
      author: user ? user.name : 'Unknown Author', // Fallback to 'Unknown Author' if user data isn't available
      introduction,
      coverImage
    };

    axios.post('http://localhost:56100/api/books/', data)
      .then(() => {
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        enqueueSnackbar('Error creating book', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='create-book-container'>
      <h1 className='create-book-title'>Create Book</h1>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className="image-upload-container">
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


        {/* Introduction Input */}
        <div className='input-container'>
          <label className='input-label'>Introduction</label>
          <input
            type='text'
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
            className='text-input'
            placeholder='Enter introduction, within 500 words.'
          />
        </div>

        {/* <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            placeholder='Enter publish year'
          />
        </div> */}

        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;