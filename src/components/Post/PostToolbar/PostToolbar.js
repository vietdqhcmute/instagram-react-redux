import React from "react";
import "./PostToolbar.css"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SendIcon from "@material-ui/icons/Send";
const PostToolbar = () => {
  return (
    <div className="post-tool-bar">
      <div className="post-tool-bar__item">
        <FavoriteBorderIcon fontSize="large"></FavoriteBorderIcon>
      </div>
      <div className="post-tool-bar__item">
        <ChatBubbleOutlineIcon fontSize="large"></ChatBubbleOutlineIcon>
      </div>
      <div className="post-tool-bar__item">
        <SendIcon fontSize="large"></SendIcon>
      </div>
    </div>
  );
};

export default PostToolbar;
