import React from 'react';
import * as client from "../users/client";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';



function EditChapter() {

    const { chapterId } = useParams();
    //const BASE_API = process.env.REACT_APP_API_BASE || "http://localhost:56100";

    //const BOOKS_API_BASE = "http://localhost:56100/api/books/";
    const CHAPTER_API_BASE = "https://sese-reading-node.onrender.com/api/chapters/";

    const [curChapter, setCurChapter] = useState({ chapterContent: '', chapterName: '' });

    const navigate = useNavigate();

    const fetchChapter = async (chapterId) => {
        try {
            const response = await axios.get(`${CHAPTER_API_BASE}onechapterinbook/${chapterId}`);
            setCurChapter(response.data);
        } catch (error) {
            console.error("Error fetching books in <EditChapter/> fetchChapter:", error);
        }
    };

    useEffect(() => {
        if (chapterId) {
            fetchChapter(chapterId);
        }
    }, [chapterId]);


    //这个函数在任何input被submit之后都会被调用，改书名，改书简洁，都会调用，就是讲curBook一整个作为一个JSON发送给api
    const updatechapter = async () => {
        const response = await axios
            .put(`${CHAPTER_API_BASE}updatechapter/${chapterId}`, curChapter);
        console.log(response.data);
        navigateToEditBook(curChapter.bookInfo)
    };

    const navigateToEditBook = (bookId) => {
        // 导航到 '/editbook/:bookId' 路径
        navigate(`/editbook/${bookId}`);
      };

    return (
        <div>
            <h1>chapterId here</h1>
            <input
                onChange={(e) => setCurChapter({ ...curChapter, chapterName: e.target.value })}
                className="form-control" type="text" value={curChapter.chapterName} />
            <textarea
                onChange={(e) => setCurChapter({ ...curChapter, chapterContent: e.target.value })}
                className="form-control"
                rows="30"
                cols="50"
                value={curChapter.chapterContent}
            />

            <button onClick={()=>updatechapter()}
                className="w-100 btn btn-danger mb-2">
                change chapter content
            </button>



        </div>
    );
}

export default EditChapter;      
