// import { db } from "../firebase";
import { posts, currentUser, comments } from "../data";

const INTIAL_STATE = {
  posts: [],
  currentUser: {},
  comments: [],
};

const reducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ALL_POST":
      return {
        ...state,
        posts: state.posts.concat(posts),
      };
    case "GET_COMMENT_BY_POST_ID":
      return {
        ...state,
        comments: state.comments.concat(getCommentByPostId(action.postId)),
      };
    case "POST_COMMENT_BY_POST_ID":
      return {
        ...state,
      };
    case "GET_CURRENT_USER":
      return {
        ...state,
        currentUser: currentUser,
      };
    default:
      return state;
  }
};
const newComment = (commentText) => {
  return {
    id: Math.random().toString(36).substring(7),
    avatar_url: currentUser.avatart_url,
    commentText: commentText,
    username: currentUser.username,
  };
};

const getCommentByPostId = (postId) =>
  comments.filter((el) => el.postId === postId);
export default reducer;
