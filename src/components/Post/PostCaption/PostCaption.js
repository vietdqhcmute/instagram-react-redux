import React from "react";
import "./PostCaption.css"
const PostCaption = (props) => {
  return (
    <div className="post-caption">
      <p>
        <strong>{props.username}</strong> {props.caption}
      </p>
    </div>
  );
};

export default PostCaption;
