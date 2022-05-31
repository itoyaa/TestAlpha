import { useSelector } from "react-redux";
import React from "react";
import classes from "./CardsList.module.css";

import Card from "./Card";

const CardsList = (props) => {
  const isFilterd = useSelector((state) => state.moviesStore.faveFilter);

  if (isFilterd) {
    const faveMovies = props.data.filter((movie) => movie.isFave);
    return (
      <div className={classes["cards-container"]}>
        {faveMovies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            description={movie.description}
            author={movie.author}
            release_date={movie.releaseDate}
            id={movie.id}
            isFave={movie.isFave}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={classes["cards-container"]}>
      {props.data.map((movie) => (
        <Card
          key={movie.id}
          title={movie.title}
          description={movie.description}
          author={movie.author}
          release_date={movie.releaseDate}
          id={movie.id}
          isFave={movie.isFave}
        />
      ))}
    </div>
  );
};

export default CardsList;
