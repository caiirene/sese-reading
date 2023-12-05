import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/account");
  };

  const back = async () => {
    navigate("/");
  };
  return (
    <div  className="d-flex align-items-center justify-content-center mt-5">
      <div className="row w-25">
        <h1>Signin</h1>
        <input
          className="form-control mt-2"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
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
        <button className="btn btn-warning" type="button" onClick={back}>
          Back
        </button>
      </div>
    </div>
  );
}
export default Signin;
