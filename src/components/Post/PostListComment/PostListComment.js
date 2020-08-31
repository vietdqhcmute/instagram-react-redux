import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import PostListCommentItem from "./PostListCommentItem/PostListCommentItem";

const PostListComment = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    props.onGetCommentById((props.id));
  }, []);

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

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetCommentById: (postId) =>
      dispatch({
        type: "GET_COMMENT_BY_POST_ID",
        postId: postId,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostListComment);
