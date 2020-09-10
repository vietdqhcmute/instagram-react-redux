import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import "./App.css";
import HomePage from "./container/HomePage/HomePage";
import Topbar from "./components/Topbar/Topbar";
import Aux from "./hoc/Aux";

import { getCurrentUser } from "./actions/User.actions";

function App(props) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userReducer.currentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <div className="App">
      <div className="app__topbar">
        <Topbar logedUser={currentUser}></Topbar>
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

export default App;
