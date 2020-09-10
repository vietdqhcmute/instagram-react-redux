import API from "./api.config";

const fetchAllPosts = () => {
  return API.get("/posts");
};
export { fetchAllPosts };
