import React from 'react';
import * as client from "../users/client";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Myworks.css';
import writing from '../ToolImages/writing.png';
import { Link } from 'react-router-dom';

import EditBook from "../EditBook/EditBook";


// 'https://sese-reading-node.onrender.com' || "http://localhost:56100"
const BASE_API = process.env.REACT_APP_API_BASE; 

const BOOKS_API_BASE = `${BASE_API}/api/books/`;

function Myworks() {

  

  const [account, setAccount] = useState(null);
  const [booksList, setBooksList] = useState([]);
  const navigate = useNavigate();

  const userData = localStorage.getItem("currentUser");
  const userObj = userData ? JSON.parse(userData) : null;
  const [currUser, setUser] = useState(userObj);

  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };


  const fetchAccount = async () => {
    findUserById(currUser?._id)
    //const curAccount = await client.account();
    //setAccount(curAccount);
    console.log("fetchaccount", account);
  };

  const fetchAllBooksFromAuthor = async (authorId) => {
    try {
      console.log("authorId", authorId)
      const response = await axios.get(`${BOOKS_API_BASE}author/${authorId}`);
      setBooksList(response.data); // 假设书籍数据在 response.data 中
    } catch (error) {
      console.error("Error fetching books in <MyWork/>fetchAllBooksFromAuthor:", error);
      // 可以设置一个错误状态来显示错误信息
    }
  };

  useEffect(() => {
    fetchAccount();
    console.log(account);
    console.log("hello!!!!!!!!!!!!");
  }, []);


  useEffect(() => {
    if (account && account._id) {
      console.log("aaaaaaa!!!!!!!!!!!!");
      //console.log("Account ID:", account._id); // 打印 account._id
      fetchAllBooksFromAuthor(account._id);
    }
  }, [account]);

  const navigateToEditBook = (bookId) => {
    // 导航到 '/editbook/:bookId' 路径
    navigate(`/editbook/${bookId}`);
  };

  return (
    <div>
      <h2>My Works</h2>

      <div className="list-group">

        {booksList
          .map((book, index) => (
            <div key={index} className="list-group-item list-group-item-secondary align-items-center mb-4">
              <h3>{book.name}</h3>
              <p>{book.description}</p>

              <button onClick={()=>navigateToEditBook(book._id)}>work on this book</button>  
            </div>
          ))}
      </div>
    </div>
  );
}

export default Myworks;
