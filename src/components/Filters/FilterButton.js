import React from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./FilterButton.module.css";

import Button from "../UI/Button";

const FilterButton = (props) => {
  const dispatch = useDispatch();

  const isPressed = useSelector((state) => state.faveFilter);
  const pressedClass = isPressed ? classes["pressed"] : "";

  const toggleFaveFilter = () => {
    dispatch({ type: "filterToggle" });
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
