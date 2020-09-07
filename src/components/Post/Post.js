import React from "react";
import "./Post.css";

import PostToolbar from "./PostToolbar/PostToolbar";
import PostInputComment from "./PostInputComment/PostInputComment";
import PostCaption from "./PostCaption/PostCaption";
import PostHeader from "./PostHeader/PostHeader";
import PostListComment from "./PostListComment/PostListComment";

const Post = (props) => {
  return (
    <div className="post">
      <PostHeader
        username={props.username}
        avatarUrl={props.avatarUrl}
      ></PostHeader>
      <img className="post__image" alt="" src={props.imageUrl}></img>
      <PostToolbar></PostToolbar>
      <h5 className="post__likes-number">{props.like} likes</h5>
      <PostCaption
        username={props.username}
        caption={props.caption}
      ></PostCaption>
      {/* <PostListComment comments={props.comments}></PostListComment> */}
      <PostInputComment id={props.id}></PostInputComment>
    </div>
  );
};

export default Post;
