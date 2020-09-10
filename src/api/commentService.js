import API from "./api.config";


const postComment = () => {
  return API.get("posts");
};
export { postComment };
