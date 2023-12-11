<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
=======
// Inside Detail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
>>>>>>> zijunBranch

function Detail() {
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
<<<<<<< HEAD
  const navigate = useNavigate();
=======

>>>>>>> zijunBranch
  useEffect(() => {
    // Fetch book details using the bookId
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      .then((res) => {
        setBookDetails(res.data);
      });
  }, [bookId]);

  if (!bookDetails || !bookDetails.volumeInfo) {
    return <div>Loading...</div>;
  }
  
<<<<<<< HEAD
  const back = async () => {
    navigate("/search");
  };
=======
>>>>>>> zijunBranch

  return (
    <div>
      <h1>Details</h1>
      <div>
        <img
          src={bookDetails.volumeInfo.imageLinks.thumbnail}
          alt={bookDetails.volumeInfo.title}
        />
      </div>

      {/* Display book details as needed */}
      <p>Title: {bookDetails.volumeInfo.title}</p>
      <p>Author: {bookDetails.volumeInfo.authors.join(", ")}</p>
      <h4>{bookDetails.volumeInfo.publisher}</h4>
      <p>{bookDetails.volumeInfo.publishedDate}</p>
      <br />
      <div>
        <p>{bookDetails.volumeInfo.description}</p>
      </div>
      <br />
      <div>
        <a href={bookDetails.volumeInfo.previewLink}>
<<<<<<< HEAD
          <button>Read</button>
        </a>
      </div>
      <button onClick={back}>Back</button>
=======
          <button>More</button>
        </a>
      </div>

      <button>Add to My List</button>
>>>>>>> zijunBranch
    </div>
  );
}

export default Detail;
