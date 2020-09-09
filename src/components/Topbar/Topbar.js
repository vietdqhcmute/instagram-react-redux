import React from "react";
import "./Topbar.css";
import { Avatar } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SendIcon from "@material-ui/icons/Send";
import HomeIcon from "@material-ui/icons/Home";
const Topbar = (props) => {
  return (
    <div className="topbar">
      <img
        className="topbar__logo"
        alt="logo"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
      ></img>
      <div className="topbar__loged-user-tool">
        <HomeIcon fontSize="large"></HomeIcon>
        <FavoriteBorderIcon fontSize="large"></FavoriteBorderIcon>
        <ChatBubbleOutlineIcon fontSize="large"></ChatBubbleOutlineIcon>
        <SendIcon fontSize="large"></SendIcon>
        <Avatar
          className="topbar__loged-user-info"
          alt={props.logedUser.username}
          src={props.logedUser.avatarUrl}
        ></Avatar>
      </div>
    </div>
  );
};

export default Topbar;
