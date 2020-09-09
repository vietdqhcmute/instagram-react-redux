import React, { useEffect } from "react";
import { connect } from "react-redux";
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
  useEffect(() => {
    props.dispatchGetAllPostsStarted();
    postAPIs
      .fetchAllPosts()
      .then((res) => {
        props.dispatchGetAllPostsSuccess(res.data);
      })
      .catch((error) => {
        props.dispatchGetAllPostsFailed(error);
      });
  }, []);

  if (props.isLoading) {
    return <CircularProgress></CircularProgress>;
  } else {
    return (
      <div className="homepage">
        <div className="homepage__posts">
          {props.posts.map((post) => (
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

const mapStateToProps = (state) => {
  return {
    posts: state.postReducer.posts,
    currentUser: state.userReducer.currentUser,
    isLoading: state.postReducer.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetAllPostsStarted: () => dispatch(getAllPostsStarted()),
    dispatchGetAllPostsSuccess: (data) => dispatch(getAllPostsSuccess(data)),
    dispatchGetAllPostsFailed: (error) => dispatch(getAllPostsFailed(error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
