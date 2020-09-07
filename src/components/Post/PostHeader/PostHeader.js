import React from "react";
import "./PostHeader.css";
import { Avatar } from "@material-ui/core";

const PostHeader = (props) => {
  return (
    <div className="post-header">
      <Avatar
        className="post-header__avatar"
        alt={props.username}
        src={props.avatarUrl}
      ></Avatar>
      <h4 className="post-header__username">{props.username}</h4>
    </div>
  );
};

export default PostHeader;
