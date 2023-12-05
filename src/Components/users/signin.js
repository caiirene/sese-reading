import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  return (
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
      <button className="btn btn-primary mt-3" onClick={signin}>
        Signin
      </button>
    </div>
  );
}
export default Signin;


