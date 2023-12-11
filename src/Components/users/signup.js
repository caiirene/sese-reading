import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import { Link } from "react-router-dom";

function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    role: "reader", // default role
  });
  const navigate = useNavigate();

  const signup = async () => {
    try {
      await client.signup(credentials);
<<<<<<< HEAD
      navigate("/profile");
=======
      navigate("/account");
>>>>>>> zijunBranch
    } catch (err) {
      setError(err.response.data.message);
    }
  };

<<<<<<< HEAD
=======
  const back = async () => {
    navigate("/");
  };

>>>>>>> zijunBranch
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <div className="row w-25 ">
        <h1>Sign up</h1>
        {error && <div>{error}</div>}
        <label className="text-start">Username</label>
        <input
          className="form-control mt-2"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              username: e.target.value,
            })
          }
        />
        <label className="text-start">Password</label>
        <input
          className="form-control mt-2"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              password: e.target.value,
            })
          }
        />
        <label className="text-start">Role</label>
        <select
          className="form-control mt-2"
          value={credentials.role}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              role: e.target.value,
            })
          }
        >
          <option value="reader">Reader</option>
          <option value="author">Author</option>
          <option value="admin">Admin</option>
        </select>
        <p className="mt-3">
          Already have an account? <Link to="/signin">Login</Link>
        </p>
        <button className="btn btn-primary mt-3" type="button" onClick={signup}>
          Signup
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
export default Signup;
