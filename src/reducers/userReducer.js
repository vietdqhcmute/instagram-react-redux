import { GET_CURRENT_USER } from "../actions/actionTypes";

const initialState = {
  currentUser: {},
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
