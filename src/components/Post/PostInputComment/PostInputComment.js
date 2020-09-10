import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import "./PostInputComment.css";

import { Button } from "@material-ui/core";
import * as commentAction from "../../../actions/Comment.actions";
import * as commentAPI from "../../../api/commentService";

const PostInputComment = (props) => {
  const dispatch = useDispatch();
  const [inputComment, setInputComment] = useState([]);
  const handlePost = () => {
    dispatch(commentAction.createNewCommentRequested());
    commentAPI
      .postComment()
      .then((res) => {
        dispatch(commentAction.createNewCommentSuccess(res.data));
      })
      .catch((error) => {
        dispatch(commentAction.createNewCommentFailed(error));
      });
    setInputComment("");
  };

  const handleCommentChange = (e) => {
    setInputComment(e.target.value);
  };
  return (
    <div className="post-comment">
      <form>
        <div className="post-comment__input">
          <textarea
            onChange={handleCommentChange}
            value={inputComment}
            className="post-comment__input_textarea"
            placeholder="Comment..."
          ></textarea>
          <Button
            onClick={handlePost}
            type="submit"
            href="#text-buttons"
            color="primary"
          >
            Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostInputComment;
