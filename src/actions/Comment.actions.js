import {
  CREATE_NEW_COMMENT_REQUESTED,
  CREATE_NEW_COMMENT_SUCCESSED,
  CREATE_NEW_COMMENT_FAILED,
} from "../@types/actionTypes";

const createNewCommentRequested = (commentText, postId, userId) => ({
  type: CREATE_NEW_COMMENT_REQUESTED,
  payload: {
    commentText: commentText,
    postId: postId,
    userId: userId,
  },
});

const createNewCommentSuccess = (postUpdated) => ({
  type: CREATE_NEW_COMMENT_SUCCESSED,
  payload: {
    postUpdated: postUpdated,
  },
});

const createNewCommentFailed = () => ({
  type: CREATE_NEW_COMMENT_FAILED,
  payload: {},
});
export {
  createNewCommentRequested,
  createNewCommentSuccess,
  createNewCommentFailed,
};
