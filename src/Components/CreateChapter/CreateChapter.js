import React from 'react';
import * as client from "../users/client";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';




function CreateChapter() {

    const { bookId } = useParams();
    //const BASE_API = process.env.REACT_APP_API_BASE || "http://localhost:56100";

    const CHAPTER_API_BASE = "http://localhost:56100/api/chapters/";

    const [curAccount, setAccount] = useState({ username: "" })

    const [newChapter, setNewChapter] = useState({ bookInfo: bookId, chapterContent: '', chapterName: '' });

    const navigate = useNavigate();

    const fetchAccount = async () => {
        const curAccount = await client.account();
        setAccount(curAccount);
        setNewChapter({...newChapter}, { author: curAccount._id })
    };

    useEffect(() => {
        fetchAccount();
        console.log("hello!!!!!!!!!!!!");
        console.log({ bookId });
        console.log({ curAccount});
        console.log({ newChapter });
    }, []);


    const createchapterbutton = async () => {
        setNewChapter({...newChapter, chapterNumber: 5})
        const response = await axios
            .post(`${CHAPTER_API_BASE}createnewchapter`, newChapter);
        console.log(response.data);
        navigate(`/editbook/${bookId}`);
    };

    return (
        <div>
            <h1>chapterId here</h1>
            <input
                onChange={(e) => setNewChapter({ ...newChapter, chapterName: e.target.value })}
                className="form-control" type="text" value={newChapter.chapterName} />
            <textarea
                onChange={(e) => setNewChapter({ ...newChapter, chapterContent: e.target.value })}
                className="form-control"
                rows="30"
                cols="50"
                value={newChapter.chapterContent}
            />

            <button onClick={() => createchapterbutton()}
                className="w-100 btn btn-danger mb-2">
                submit this new chapter
            </button>



        </div>
    );
}

export default CreateChapter;      
