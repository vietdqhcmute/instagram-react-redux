import API from "./api.config";

const postComment = (userId, postId, description) => {
  return API.post("/comments", {
    user_id: userId,
    post_id: postId,
    description: description,
  });
};
export { postComment };
