import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import "./HomePage.css";
import CircularProgress from "@material-ui/core/CircularProgress";

import Post from "../../components/Post/Post";
import { getAllPosts } from "../../actions/Post.actions";
const HomePage = (props) => {
  useEffect(() => {
    props.onGetAllPosts();
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
    onGetAllPosts: () => dispatch(getAllPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
