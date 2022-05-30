import React from "react";
import classes from "./CardWrapper.module.css";

const CardWrapper = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default CardWrapper;
