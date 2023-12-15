import axios from "axios";

// 'https://sese-reading-node.onrender.com' || "http://localhost:56100"
const BASE_API = process.env.REACT_APP_API_BASE; 

const COMMENTS_API = `${BASE_API}/api/comments`;

export const addComment = async (comment) => {
  try {
    const response = await axios.post(`${COMMENTS_API}`, comment);
    return response.data;
  } catch (error) {
    console.error("Error posting comment:", error);
    throw error;
  }
};

export const findAllComments = async () => {
  try {
    const response = await axios.get(`${COMMENTS_API}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

export const findCommentByUserId = async (readerId) => {
  try {
    const response = await axios.get(`${COMMENTS_API}/user`, { params: { readerId: readerId } });
    return response.data;
  } catch (error) {
    console.error(`Error fetching comments with user's ID ${readerId}:`, error);
    throw error;
  }
};

export const findCommentByBookId = async (bookId) => {
    try {
    const response = await axios.get(`${COMMENTS_API}/book`, { params: { bookId: bookId } });
      return response.data;
    } catch (error) {
      console.error(`Error fetching comment with book's ID ${bookId}:`, error);
      throw error;
    }
  };

export const deleteComment = async (commentId) => {
  try {
    // api/comment/123
    const response = await axios.delete(`${COMMENTS_API}/${commentId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting comment with ID ${commentId}:`, error);
    throw error;
  }
};

export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() returns 0-11
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  return formattedDate;
};