import React from "react";
import "./Post.css";

import PostToolbar from "./PostToolbar/PostToolbar";
import PostInputComment from "./PostInputComment/PostInputComment";
import PostCaption from "./PostCaption/PostCaption";
import PostHeader from "./PostHeader/PostHeader";
import PostListComment from "./PostListComment/PostListComment";

const Post = (props) => {
  console.log(props);
  return (
    <div className="post">
      <PostHeader
        username={props.username}
        avatar_url={props.avatar_url}
      ></PostHeader>
      <img className="post__image" alt="" src={props.post_url}></img>
      <PostToolbar></PostToolbar>
      <h5 className="post__likes-number">{props.like} likes</h5>
      <PostCaption
        username={props.username}
        caption={props.caption}
      ></PostCaption>
      <PostListComment></PostListComment>
      <PostInputComment></PostInputComment>
    </div>
  );
};

export default Post;
