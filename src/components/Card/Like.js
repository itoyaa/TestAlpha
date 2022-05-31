import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { moviesActions } from "../../store/index";

import { HeartOutline, Heart } from "react-ionicons";

const Like = (props) => {
  const dispatch = useDispatch();

  const id = props.id;

  const like = useSelector(
    (state) =>
      state.moviesStore.moviesDataArray.filter((movie) => id === movie.id)[0]
        .isFave
  );

  const toggleLike = () => {
    dispatch(moviesActions.likeMovie(id));
  };

  if (like === true) {
    return (
      <Heart
        onClick={toggleLike}
        color={"#7048e8"}
        height="40px"
        width="40px"
      />
    );
  }
  return (
    <HeartOutline
      onClick={toggleLike}
      color={"#7048e8"}
      height="40px"
      width="40px"
    />
  );
};

export default Like;

// dispatch(moviesActions.initMovies(convertedData));
