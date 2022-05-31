import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { moviesActions } from "../../store/index";

import classes from "./FilterButton.module.css";

import Button from "../UI/Button";

const FilterButton = (props) => {
  const dispatch = useDispatch();

  const isPressed = useSelector((state) => state.moviesStore.faveFilter);
  const pressedClass = isPressed ? classes["pressed"] : "";

  const toggleFaveFilter = () => {
    dispatch(moviesActions.filterToggle());
  };

  return (
    <Button
      onClick={toggleFaveFilter}
      className={`${classes["filter-btn"]} ${pressedClass}`}
    >
      Favourites ❤️
    </Button>
  );
};

export default FilterButton;
