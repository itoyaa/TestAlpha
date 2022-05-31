import React from "react";
import { useDispatch } from "react-redux";
import { moviesActions } from "../../store/index";

import Button from "../UI/Button";
import classes from "./Card.module.css";
import CardWrapper from "./CardWrapper";
import Like from "./Like";

const Card = (props) => {
  const dispatch = useDispatch();

  const removeCardHandler = () => {
    dispatch(moviesActions.removeMovie(props.id));
  };

  return (
    <CardWrapper>
      <h2 className={classes.title}>🎥 {props.title}</h2>
      <p className={classes.description}>{props.description}</p>
      <p className={classes.author}>👨🏻‍💻 {props.author}</p>
      <p className={classes.release}>{props.releaseDate}</p>
      <div className={classes.actions}>
        <Button className={classes["delete-btn"]} onClick={removeCardHandler}>
          Delete
        </Button>
        <Like id={props.id} />
      </div>
    </CardWrapper>
  );
};

export default Card;
