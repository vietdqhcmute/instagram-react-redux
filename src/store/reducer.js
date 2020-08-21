// import { db } from "../firebase";
import { posts, currentUser } from "../data";

const INTIAL_STATE = {
  posts: [],
  currentUser: {},
};

const reducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ALL_POST":
      // db.collection("posts").onSnapshot((snapshot) => {
      //   const data = snapshot.docs.map((doc) => ({
      //     post: doc.data(),
      //     id: doc.id,
      //   }));
      return {
        ...state,
        posts: state.posts.concat(posts),
      };
    case "POST_COMMENT_BY_POST_ID":
      console.log(action)
      return {
        ...state
      };
    case "GET_CURRENT_USER_INFO":
      return {
        ...state,
        currentUser: currentUser,
      };
    default:
      return state;
  }
};
export default reducer;
