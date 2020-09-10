import {
  GET_CURRENT_USER,
  OPEN_CREATE_POST_MODAL,
  CLOSE_CREATE_POST_MODAL,
} from "../@types/actionTypes";

const initialState = {
  currentUser: {},
  isOpenCreatePostModal: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case OPEN_CREATE_POST_MODAL:
      return {
        ...state,
        isOpenCreatePostModal: true,
      };
    case CLOSE_CREATE_POST_MODAL:
      return {
        ...state,
        isOpenCreatePostModal: false,
      };
    default:
      return state;
  }
};
export default userReducer;
