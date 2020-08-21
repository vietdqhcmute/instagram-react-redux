import React from "react";
import Aux from "../../hoc/Aux";
import "./Topbar.css";
const Topbar = () => {
  return (
    <div className="topbar">
      <Aux>
        <img
          className="topbar__logo"
          alt="logo"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        ></img>
      </Aux>
    </div>
  );
};

export default Topbar;
