import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./App.css";
import HomePage from "./container/HomePage/HomePage";
import Topbar from "./components/Topbar/Topbar";
import Aux from "./hoc/Aux";

function App(props) {
  useEffect(()=>{
    props.getCurrentUser();
  })
  return (
    <div className="App">
      <div className="app__topbar">
        <Topbar></Topbar>
      </div>
      <div className="app__content">
        <div className="app__spacebar"></div>
        <Aux>
          <HomePage></HomePage>
        </Aux>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: () => dispatch({ type: "GET_CURRENT_USER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
