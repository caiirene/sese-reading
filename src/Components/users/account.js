import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  const userData = localStorage.getItem("currentUser");
  const userObj = userData ? JSON.parse(userData) : null;
  const [currUser, setUser] = useState(userObj);

  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  /*const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
    setUserRole(account.role)
    console.log("account",account)
  };*/
  const findCurrentUser = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
    setUserRole(user.role)
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      findCurrentUser(currUser?._id);
    }
  }, []);

  const save = async () => {
    //console.log("saving account", account)
    await client.updateUser(account);
    //console.log("saved account", account)
  };

  const signout = async () => {
    await client.signout();
    navigate("/signin");
  };



  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <div className="container w-50">
        <h1 className="text-start">Account</h1>
        {account && (
          <div className="d-flex flex-column text-start w-50 my-4">
            <label>FirstName</label>
            <input
              className="form-control mt-2"
              value={account.firstName}
              onChange={(e) =>
                setAccount({ ...account, firstName: e.target.value })
              }
            />
            <label>lastName</label>
            <input
              className="form-control mt-2"
              value={account.lastName}
              onChange={(e) =>
                setAccount({ ...account, lastName: e.target.value })
              }
            />
            <label>Password</label>
            <input
              id="password"
              className="form-control mt-2"
              value={account.password}
              onChange={(e) =>
                setAccount({ ...account, password: e.target.value })
              }
            />
            <label>Email</label>
            <input
              className="form-control mt-2"
              value={account.email}
              onChange={(e) =>
                setAccount({ ...account, email: e.target.value })
              }
            />
            <label>Role</label>
            <select
              className="form-control mt-2"
              value={account.role}
              onChange={(e) => setAccount({ ...account, role: e.target.value })}
            >
              <option value="admin">Admin</option>
              <option value="author">Author</option>
              <option value="reader">Reader</option>
            </select>
            <button className="btn btn-primary w-100 mt-2 " onClick={save}>
              <Link className="text-white text-decoration-none" to="/profile">Save</Link>
            </button>
            <button className="btn btn-primary w-100 mt-2 " onClick={save}>
              <Link className="text-white text-decoration-none" to="/profile">Back to Profile</Link>
            </button>
            <button className="btn btn-danger w-100 mt-2" onClick={signout}>
              Signout
            </button>
            {userRole === "admin" && (
              <Link to="/table" className="btn btn-warning w-100 mt-2">
                Users
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default Account;
