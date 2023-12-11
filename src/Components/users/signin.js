import * as client from "./client";
<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useState } from "react";
>>>>>>> zijunBranch
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
<<<<<<< HEAD
    isAuthenticated: false,
  });
  const [userId, setUserId] = useState({
    userId: null,
  });

  
  useEffect(() => {}, [userId]);


  const navigate = useNavigate();
  const signin = async () => {
    const data = await client.signin(credentials); 
    setUserId(data?._id);
    if (userId !== null) {
      setCredentials({ ...credentials, isAuthenticated: true });
      const jsonString = JSON.stringify(data);
      localStorage.setItem('currentUser', jsonString);
    }
    navigate("/");
    window.location.reload();
  };

=======
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/account");
  };

  const back = async () => {
    navigate("/");
  };
>>>>>>> zijunBranch
  return (
    <div  className="d-flex align-items-center justify-content-center mt-5">
      <div className="row w-25">
        <h1>Sign in</h1>
        <label className="text-start">Username</label>
        <input
          className="form-control mt-2"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <label className="text-start">Password</label>
        <input
          className="form-control mt-3"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <p className="mt-3">
          Not have an account? <Link to="/signup">Register</Link>
        </p>
        <button className="btn btn-primary mt-3" onClick={signin}>
          Signin
        </button>
<<<<<<< HEAD
=======
        <button className="btn btn-warning" type="button" onClick={back}>
          Back
        </button>
>>>>>>> zijunBranch
      </div>
    </div>
  );
}
export default Signin;
