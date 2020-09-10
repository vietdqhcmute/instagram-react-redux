import {
  CREATE_NEW_COMMENT_REQUESTED,
  CREATE_NEW_COMMENT_FAILED,
} from "../@types/actionTypes";
const initialState = {};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_COMMENT_REQUESTED:
      return {
        ...state,
      };

      case CREATE_NEW_COMMENT_FAILED:
        return {
          ...state,
        };
    default:
      return state;
  }
};
export default commentReducer;
