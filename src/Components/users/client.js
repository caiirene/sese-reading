import axios from "axios";
const request = axios.create({
  withCredentials: true,
});
export const BASE_API = process.env.REACT_APP_API_BASE;

// 'https://sese-reading-node.onrender.com' || "http://localhost:56100"
export const USERS_API = `${BASE_API}/api/users`;

export const signin = async (credentials) => {
  const response = await request.post(`${USERS_API}/signin`, credentials);
  return response.data;
};
export const account = async () => {
  const response = await request.post(`${USERS_API}/account`);
  //console.log("client account",response.data)
  return response.data;
};
export const updateUser = async (user) => {
  const response = await request.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};
export const findAllUsers = async () => {
  const response = await request.get(`${USERS_API}`);
  return response.data;
};
export const createUser = async (user) => {
  const response = await request.post(`${USERS_API}`, user);
  return response.data;
};
export const findUserById = async (id) => {
  //console.log("findUserById",id);
  const response = await request.get(`${USERS_API}/${id}`);
  //console.log("findUserById",response.data);
  return response.data;
};
export const deleteUser = async (user) => {
  const response = await request.delete(`${USERS_API}/${user._id}`);
  return response.data;
};
export const signup = async (user) => {
  const response = await request.post(`${USERS_API}/signup`, user);
  return response.data;
};
export const signout = async () => {
  const response = await request.post(`${USERS_API}/signout`);
  return response.data;
};