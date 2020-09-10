import React from "react";
import { useDispatch } from "react-redux";

import "./Topbar.css";
import { Avatar } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";

import { openCreatePostModal } from "../../actions/Post.actions";

const Topbar = (props) => {
  const dispatch = useDispatch();
  const handleOpenPostModal = () => {
    dispatch(openCreatePostModal())
  };

  return (
    <div className="topbar">
      <img
        className="topbar__logo"
        alt="logo"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
      ></img>
      <div className="topbar__loged-user-tool">
        <IconButton
          onClick={handleOpenPostModal}
          fontSize="large"
          aria-label="add image"
        >
          <AddIcon></AddIcon>
        </IconButton>
        <HomeIcon fontSize="large"></HomeIcon>
        <FavoriteBorderIcon fontSize="large"></FavoriteBorderIcon>
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
