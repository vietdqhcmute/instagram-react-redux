import {
  GET_ALL_POSTS_STARTED,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAILED,
} from "../@types/actionTypes";

const getAllPostsStarted = () => ({ type: GET_ALL_POSTS_STARTED });
const getAllPostsSuccess = (posts) => ({
  type: GET_ALL_POSTS_SUCCESS,
  payload: posts,
});
const getAllPostsFailed = (err) => ({
  type: GET_ALL_POSTS_FAILED,
  payload: { err },
});

export {
  getAllPostsStarted,
  getAllPostsSuccess,
  getAllPostsFailed,
};
