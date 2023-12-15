import React from 'react';
import * as client from "../users/client";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';



function ReadBook() {

    const { bookId } = useParams();
    console.log(bookId);
    
    const BASE_API = process.env.REACT_APP_API_BASE;
    const BOOKS_API_BASE = `${BASE_API}/api/books/`;
    const CHAPTER_API_BASE = `${BASE_API}/api/chapters/`;

    const [curBook, setCurBook] = useState({ name: '', description: '' });

    const [chaptersList, setChaptersList] = useState([]);
    const navigate = useNavigate();

    const fetchBook = async (bookId) => {
        try {
            const response = await axios.get(`${BOOKS_API_BASE}${bookId}`);
            setCurBook(response.data);
        } catch (error) {
            console.error("Error fetching books in <ReadBook/> fetchBook:", error);
        }
    };

    //allchaptersinbooksorted/:bookId"
    const fetchChapters = async (bookId) => {
        try {
            const response = await axios.get(`${CHAPTER_API_BASE}allchaptersinbooksorted/${bookId}`);
            setChaptersList(response.data);
        } catch (error) {
            console.error("Error fetching books in <EditBook/> fetchChapters:", error);
        }
    };

    useEffect(() => {
        if (bookId) {
            fetchBook(bookId);
            fetchChapters(bookId);
        }
    }, [bookId]);


    const navigateToReadChapter = (chapterId) => {
        // 导航到 '/editbook/:bookId' 路径
        navigate(`/readchapter/${chapterId}`);
    };


    return (
        <div>
            <h2>{curBook.name}</h2>

            <div className="list-group">

                {chaptersList
                    .map((chapter, index) => (
                        <div key={index} className="list-group-item list-group-item-secondary align-items-center mb-4">
                            <h3>{chapter.chapterName}</h3>
                            <button onClick={() => navigateToReadChapter(chapter._id)}>read chapter</button>
                        </div>
                    ))}
            </div>

        </div>
    );
}

export default ReadBook;