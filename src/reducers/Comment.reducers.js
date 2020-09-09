import { CREATE_NEW_COMMENT } from "../@types/actionTypes";
const initialState = {};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_COMMENT:
      debugger
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
  // avatar_url: currentUser.avatart_url,
  // commentText: commentText,
  // username: currentUser.username,
});
export default commentReducer;
