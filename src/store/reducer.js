// import { db } from "../firebase";
import data from "../data";

const INTIAL_STATE = {
  posts: [],
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
        posts: state.posts.concat(data),
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.val,
      };
    case "SUB":
      return {
        ...state,
        counter: state.counter - action.val,
      };
    case "STORE_RESULT":
      console.log(state);
      return {
        ...state,
        results: state.results.concat(state.counter),
      };
    default:
      return state;
  }
};
export default reducer;
