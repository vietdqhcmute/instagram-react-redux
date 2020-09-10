import {
  GET_ALL_POSTS_STARTED,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAILED,
  CREATE_NEW_COMMENT_SUCCESSED,
} from "../@types/actionTypes";

const initialState = {
  isLoading: true,
  posts: [],
  error: null,
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: state.posts.concat(action.payload),
      };
    case GET_ALL_POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload.err,
      };
    case CREATE_NEW_COMMENT_SUCCESSED:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id == action.payload.postUpdated.id
            ? action.payload.postUpdated
            : post
        ),
      };
    default:
      return state;
  }
};
export default postReducer;
