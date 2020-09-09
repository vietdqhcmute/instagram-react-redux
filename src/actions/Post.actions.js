import axios from "axios";
import {
  GET_ALL_POSTS_STARTED,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAILED,
} from "../@types/actionTypes";

const getAllPosts = () => {
  return (dispatch) => {
    dispatch(getAllPostsStarted());
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        dispatch(getAllPostsSuccess(res.data));
      })
      .catch((err) => {
        getAllPostsFailed(err);
      });
  };
};
const getAllPostsStarted = () => ({ type: GET_ALL_POSTS_STARTED });
const getAllPostsSuccess = (posts) => ({
  type: GET_ALL_POSTS_SUCCESS,
  payload: posts,
});
const getAllPostsFailed = (err) => ({
  type: GET_ALL_POSTS_FAILED,
  payload: { err },
});

export { getAllPosts };
