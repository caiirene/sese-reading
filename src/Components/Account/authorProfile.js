import * as userClient from "../users/client";
import * as bookClient from "../books/client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

function AuthorProfile() {
  const { id } = useParams();
  console.log("useparams",id)
  const [account, setAccount] = useState(null);
  const [works, setWorks] = useState([]);
  const navigate = useNavigate();

  const findUserById = async (id) => {
    console.log(id)
    const user = await userClient.findUserById(id);
    console.log(user)
    setAccount(user);
    fetchAuthorWorks(user._id); // Assuming the user object has an _id property
  };

//   const findUserByName = async (firstname) => {
//     const user = await userClient.findUserByName(firstname);
//     setAccount(user);
//     fetchAuthorWorks(user._id); // Assuming the user object has an _id property
//   }

  const fetchAuthorWorks = async (userId) => {
    // Replace with actual call to fetch books by author's user ID
    const authorWorks = await bookClient.fetchBooksByAuthor(userId);
    setWorks(authorWorks);
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    }
  }, [id]);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Author Profile</h1>
      <div className="d-flex align-items-center justify-content-center">
        {account && (
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Profile Information</h5>
              <label className="fw-bold">Author Name</label>
              <p className="card-text">{account.username}</p >
              <label className="fw-bold">Email</label>
              <p className="card-text">{account.email}</p >
              <label className="fw-bold">Works</label>
              <ul>
                {works.map((work, index) => (
                  <li key={index}>{work.title}</li> // Assuming the work object has a title property
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthorProfile;