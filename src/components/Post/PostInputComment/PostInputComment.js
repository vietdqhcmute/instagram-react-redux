import React, { useState } from "react";
import { connect } from "react-redux";
import "./PostInputComment.css";

import { Button } from "@material-ui/core";

const PostInputComment = (props) => {
  const [inputComment, setInputComment] = useState([]);
  const handlePost = () => {
    props.onHandlePost([inputComment, props]);
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

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHandlePost: (params) =>
      dispatch({
        type: "POST_COMMENT_BY_POST_ID",
        val: params["inputComment"],
        key: params["key"],
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostInputComment);
