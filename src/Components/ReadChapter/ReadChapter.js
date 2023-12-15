import React from 'react';
import * as client from "../users/client";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ReadChapter() {

    const { chapterId } = useParams();
    //const BASE_API = process.env.REACT_APP_API_BASE || "http://localhost:56100";

    //const BOOKS_API_BASE = "http://localhost:56100/api/books/";
    const CHAPTER_API_BASE = "https://sese-reading-node.onrender.com/api/chapters/";

    const [curChapter, setCurChapter] = useState({ chapterContent: '', chapterName: '' });

    const fetchChapter = async (chapterId) => {
        try {
            const response = await axios.get(`${CHAPTER_API_BASE}onechapterinbook/${chapterId}`);
            setCurChapter(response.data);
        } catch (error) {
            console.error("Error fetching books in <ReadChapter/> fetchChapter:", error);
        }
    };

    useEffect(() => {
        if (chapterId) {
            fetchChapter(chapterId);
        }
    }, [chapterId]);

    return (
        <div>

            <h5>curChapter.chapterName</h5>
            <p>{curChapter.chapterContent}</p>
        </div>
    );
}

export default ReadChapter;      
