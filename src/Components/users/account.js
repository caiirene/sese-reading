import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
<<<<<<< HEAD
  const [userRole, setUserRole] = useState("USER");
=======
>>>>>>> zijunBranch
  const navigate = useNavigate();
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
<<<<<<< HEAD
    setUserRole(account.role)
=======
>>>>>>> zijunBranch
  };
  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);

  const save = async () => {
    await client.updateUser(account);
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
<<<<<<< HEAD
            <label>Role</label>
=======
            <label>DOB</label>
            <input
              className="form-control mt-2"
              value={account.dob}
              onChange={(e) => setAccount({ ...account, dob: e.target.value })}
            />
>>>>>>> zijunBranch
            <select
              className="form-control mt-2"
              onChange={(e) => setAccount({ ...account, role: e.target.value })}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="AUTHOR">Faculty</option>
              <option value="READER">Student</option>
            </select>
<<<<<<< HEAD
            <button className="btn btn-primary w-100 mt-2 " onClick={save}>
              <Link className="text-white text-decoration-none" to="/profile">Save</Link>
=======
            <button className="btn btn-primary w-100 mt-2" onClick={save}>
              Save
>>>>>>> zijunBranch
            </button>
            <button className="btn btn-danger w-100 mt-2" onClick={signout}>
              Signout
            </button>
<<<<<<< HEAD
            {userRole === "ADMIN" && (
              <Link to="/table" className="btn btn-warning w-100 mt-2">
                Users
              </Link>
            )}
=======
            <Link to="/admin/users" className="btn btn-warning w-100 mt-2 ">
              Users
            </Link>
>>>>>>> zijunBranch
          </div>
        )}
      </div>
    </div>
  );
}
export default Account;
