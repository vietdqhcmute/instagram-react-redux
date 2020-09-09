import axios from "axios";
import { CREATE_NEW_COMMENT } from "../@types/actionTypes";

const createNewComment = (commentText, postId, userId) => ({
  type: CREATE_NEW_COMMENT,
  payload: {
    commentText: commentText,
    postId: postId,
    userId: userId,
  },
});
export { createNewComment };
