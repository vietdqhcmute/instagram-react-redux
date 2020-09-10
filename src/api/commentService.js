import API from "./api.config";


const postComment = () => {
  return API.post("posts", {});
};
export { postComment };
