import React from "react";
import "./App.css";
import HomePage from "./container/HomePage/HomePage";
import Topbar from "./components/Topbar/Topbar";
import Aux from "./hoc/Aux";

function App() {
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

export default App;
