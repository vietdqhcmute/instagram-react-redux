import { combineReducers } from "redux";
import postReducer from "./Post.reducers";
import commentReducer from "./Comment.reducers";
import userReducer from "./User.reducers";

export default combineReducers({ postReducer, commentReducer, userReducer });
