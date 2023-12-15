import * as client from "./client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Signin() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    isAuthenticated: false,
  });
  const [userId, setUserId] = useState({
    userId: null,
  });

  
  useEffect(() => {}, [userId]);


  const navigate = useNavigate();

  const signin = async () => {
    const data = await client.signin(credentials);

    if (!data || data._id === undefined || data._id === null) {
      // User not found in the database, show an alert
      alert("Incorrect username or password. Please try again.");
    } else {
      setUserId(data._id);
      setCredentials({ ...credentials, isAuthenticated: true });
      const jsonString = JSON.stringify(data);
      localStorage.setItem('currentUser', jsonString);
      navigate("/");
      window.location.reload();
    }
  };


  /*const signin = async () => {
      const data = await client.signin(credentials); 
    setUserId(data?._id);
    if (userId !== undefined) {
      console.log(userId.userId);
      setCredentials({ ...credentials, isAuthenticated: true });
      const jsonString = JSON.stringify(data);
      localStorage.setItem('currentUser', jsonString); 
    }
    if (userId === undefined) {
      setError(data.message);
    }
    navigate("/");
    window.location.reload();
  };*/
    
    
    
  

  return (
    <div  className="d-flex align-items-center justify-content-center mt-5">
      <div className="row w-25">
        <h1>Sign in</h1>
        {}
        {error && (<div>{error}</div>)}
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
      </div>
    </div>
  );
}
export default Signin;
