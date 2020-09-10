import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as postAPIs from "../../api/postServices";
import "./HomePage.css";
import CircularProgress from "@material-ui/core/CircularProgress";

import Post from "../../components/Post/Post";
import {
  getAllPostsStarted,
  getAllPostsSuccess,
  getAllPostsFailed,
} from "../../actions/Post.actions";

const HomePage = (props) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer.posts);
  const isLoading = useSelector((state) => state.postReducer.isLoading);
  const currentUser = useSelector((state) => state.userReducer.currentUser);

  useEffect(() => {
    dispatch(getAllPostsStarted())
    postAPIs
      .fetchAllPosts()
      .then((res) => {
        dispatch(getAllPostsSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getAllPostsFailed(error))
      });
  }, []);

  if (isLoading) {
    return <CircularProgress></CircularProgress>;
  } else {
    return (
      <div className="homepage">
        <div className="homepage__posts">
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              username={post.author.username}
              avatarUrl={post.author.avatarUrl}
              imageUrl={post.imageUrl}
              like={post.like}
              caption={post.caption}
              comments={post.comments}
            ></Post>
          ))}
        </div>
      </div>
    );
  }
};

export default HomePage;
