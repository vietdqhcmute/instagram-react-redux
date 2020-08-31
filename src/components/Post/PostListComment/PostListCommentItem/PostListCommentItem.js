import React from "react";
import "./PostListCommentItem.css";

const PostListCommentItem = (props) => {
  return (
    <div className="comment-item">
      <div className="comment-item__text">
        <p>
          <span className="comment-item__username">{props.commentInfo.username} </span>
          {props.commentInfo.comment}
        </p>
      </div>
    </div>
  );
};

export default PostListCommentItem;
