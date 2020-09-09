import React, { useState } from "react";

import PostListCommentItem from "./PostListCommentItem/PostListCommentItem";

const PostListComment = (props) => {
  return (
    <div className="post-list-comment">
      {props.comments.map((el) => (
        <PostListCommentItem
          key={el.id}
          commentInfo={el}
        ></PostListCommentItem>
      ))}
    </div>
  );
};

export default PostListComment;
