import React from "react";
import Button from "../UI/Button";
import classes from "./Card.module.css";
import CardWrapper from "./CardWrapper";
import Like from "./Like";

const Card = (props) => {
  return (
    <CardWrapper>
      <h2 className={classes.title}>🎥 {props.title}</h2>
      <p className={classes.description}>{props.description}</p>
      <p className={classes.author}>👨🏻‍💻 {props.author}</p>
      <p className={classes.release}>{props.releaseDate}</p>
      <div className={classes.actions}>
        <Button className={classes["delete-btn"]}>Delete</Button>
        <Like />
      </div>
    </CardWrapper>
  );
};

export default Card;
