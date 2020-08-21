import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./HomePage.css";

import Post from "../../components/Post/Post";
const HomePage = (props) => {

  useEffect(() => {
    props.onGetAllPost()
  },[]);

  return (
    <div className="homepage">
      <div className="homepage__posts">
        {props.posts.map((post, id) => (
          <Post
            key={id}
            username={post.username}
            avatar_url={post.avatar_url}
            post_url={post.post_url}
            like={post.like}
            caption={post.caption}
            comments={post.comments}
          ></Post>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllPost: () => dispatch({ type: "GET_ALL_POST" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
// export default HomePage;
