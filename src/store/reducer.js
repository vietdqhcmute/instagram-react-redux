// import { db } from "../firebase";
import { posts, currentUser } from "../data";
import {
  GET_ALL_POSTS,
  POST_COMMENT_BY_POST_ID,
  GET_CURRENT_USER,
} from "../@types/actionTypes";
const INTIAL_STATE = {
  posts: [],
  currentUser: {},
};

const reducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: state.posts.concat(posts),
      };
    case POST_COMMENT_BY_POST_ID:
      const initComment = newComment(action.commentText);
      return {
        ...state,
      };
    default:
      return state;
  }
};
const newComment = (commentText) => ({
  id: Math.random().toString(36).substring(7),
  avatar_url: currentUser.avatart_url,
  commentText: commentText,
  username: currentUser.username,
});

export default reducer;
