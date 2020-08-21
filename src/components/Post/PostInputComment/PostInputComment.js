import React from "react";
import "./PostInputComment.css";
import { Button } from "@material-ui/core";
const PostInputComment = () => {
  return (
    <div className="post-comment">
      <form>
        <div className="post-comment__input">
          <textarea
            className="post-comment__input_textarea"
            placeholder="Comment..."
          ></textarea>
          <Button href="#text-buttons" color="primary">
            Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostInputComment;
