import React from 'react';
import * as client from "../users/client";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import * as client from "../users/client";



function CreateChapter() {

    const { bookId } = useParams();
    //const BASE_API = process.env.REACT_APP_API_BASE || "http://localhost:56100";

    const CHAPTER_API_BASE = "http://localhost:56100/api/chapters/";

    const [newChapter, setNewChapter] = useState({ chapterContent: '', chapterName: '' });

    const navigate = useNavigate();

    const fetchAccount = async () => {
        const curAccount = await client.account();
        setAccount(curAccount);
    };

    useEffect(() => {
        fetchAccount();
        console.log("hello!!!!!!!!!!!!");
    }, []);


    //这个函数在任何input被submit之后都会被调用，改书名，改书简洁，都会调用，就是讲curBook一整个作为一个JSON发送给api
    const createchapterbutton = async () => {
        const response = await axios
            .put(`${CHAPTER_API_BASE}updatechapter/${chapterId}`, curChapter);
        console.log(response.data);
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

            <button onClick={() => createchapterbutton()}
                className="w-100 btn btn-danger mb-2">
                change chapter content
            </button>



        </div>
    );
}

export default CreateChapter;      
