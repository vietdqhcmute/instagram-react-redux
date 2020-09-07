import React, { useState } from "react";

import PostListCommentItem from "./PostListCommentItem/PostListCommentItem";

const PostListComment = (props) => {
  const [comments, setComments] = useState([]);

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
