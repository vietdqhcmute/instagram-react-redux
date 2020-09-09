import axios from "axios";
import { API_DOMAIN } from "../config";
const fetchAllPosts = () => {
  return axios.get(API_DOMAIN + "posts");
};
export { fetchAllPosts };
