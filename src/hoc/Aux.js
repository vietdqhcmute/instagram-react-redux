import React from "react";
import { Container } from "@material-ui/core";
import "./Aux.css";
const Aux = (props) => {
  return <Container className="aux__container">{props.children}</Container>;
};

export default Aux;
