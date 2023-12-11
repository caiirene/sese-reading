import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { BsFillCheckCircleFill, BsPencil, BsTrash3Fill, BsPlusCircleFill }
  from "react-icons/bs";
import * as client from "./client";
import { Link } from "react-router-dom";
function UserTable() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: "", password: "", role: "USER" });
=======
import { Link } from "react-router-dom";
import {
  BsTrash3Fill,
  BsFillCheckCircleFill,
  BsPencil,
  BsPlusCircleFill,
} from "react-icons/bs";
import * as client from "./client";
function UserTable() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "USER",
  });
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
>>>>>>> zijunBranch
  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };
  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };
  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };
<<<<<<< HEAD
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => { fetchUsers(); }, []);
  return (
    <div className="text-center">
      <table className="table mx-auto">
=======

  return (
    <div>
      <h1>User List</h1>
      <table className="table w-75 ms-5">
>>>>>>> zijunBranch
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>First Name</th>
            <th>Last Name</th>
<<<<<<< HEAD
            <th>User Role</th>
          </tr>
          <tr>
            <td>
              <input className="w-75" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
            </td>
            <td>
                <input className="w-75" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
            </td>
            <td>
              <input className="w-75" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
              <input className="w-75" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
              <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
=======
          </tr>
          <tr className="w-75">
            <td>
              <input
                className="w-50"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </td>
            <td>
              <input
                className="w-75"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </td>
            <td>
              <input
                className="w-75"
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
            </td>
            <td>
              <input
                className="w-75"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </td>
            <td>
              <select
                value={user.role}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
              >
>>>>>>> zijunBranch
                <option value="USER">User</option>
                <option value="admin">Admin</option>
                <option value="reader">Reader</option>
                <option value="author">Author</option>
              </select>
            </td>
<<<<<<< HEAD
            <td className="text-nowrap">
              <BsFillCheckCircleFill onClick={updateUser}
                className="me-2 text-primary fs-1 text" />
              <BsPlusCircleFill onClick={createUser}
                className="text-success fs-1 text" />
=======
            <td>
              <BsPlusCircleFill
                onClick={createUser}
                className="text-primary fs-1 text me-2"
              />
            </td>
            <td>
              <BsFillCheckCircleFill
                onClick={updateUser}
                className="me-2 text-success fs-1 text me-2"
              />
>>>>>>> zijunBranch
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
<<<<<<< HEAD
              <Link to={`/project/account/${user._id}`}>
                {user.username}
              </Link>
              <td>{user.password}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.role}</td>
              <td>
                <td className="text-nowrap">
                <button className="btn btn-danger w-50 me-2">
                  <BsTrash3Fill onClick={() => deleteUser(user)} />
                </button>
                <button className="btn btn-warning w-50 me-2">
                  <BsPencil onClick={() => selectUser(user)} />
                </button>
              </td>
              </td>
            </tr>))}
=======
              <td>
                <Link to={`/account/${user._id}`}>{user.username}</Link>
              </td>
              <td>{user.password}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td></td>
              <td className="text-nowrap">
                <button className="btn btn-warning me-2">
                  <BsPencil onClick={() => selectUser(user)} />
                </button>
                <button className="btn btn-danger me-2">
                  <BsTrash3Fill onClick={() => deleteUser(user)} />
                </button>
              </td>
            </tr>
          ))}
>>>>>>> zijunBranch
        </tbody>
      </table>
    </div>
  );
}
<<<<<<< HEAD
export default UserTable;
=======
export default UserTable;
>>>>>>> zijunBranch
