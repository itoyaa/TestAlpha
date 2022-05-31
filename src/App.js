import React, { useState, useEffect, useCallback } from "react";
import { moviesActions } from "./store/index";
import { useSelector, useDispatch } from "react-redux";

import classes from "./App.module.css";

import CardsList from "./components/Card/CardsList";
import Page from "./components/UI/Page";
import FilterButton from "./components/Filters/FilterButton";

function App() {
  const dispatch = useDispatch();

  const [myError, setMyError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getMoviesHandler = useCallback(async () => {
    setMyError(null);

    try {
      const response = await fetch("https://ghibliapi.herokuapp.com/films/");

      if (!response.ok) {
        throw new Error("Something went wrong...");
      }

      const data = await response.json();

      const convertedData = data.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          description: movie.description,
          author: movie.director,
          releaseDate: movie.release_date,
          isFave: false,
        };
      });
      dispatch(moviesActions.initMovies(convertedData));
    } catch (error) {
      setMyError(error);
    }
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    getMoviesHandler();
  }, [getMoviesHandler]);

  const movies = useSelector((state) => state.moviesStore.moviesDataArray);

  if (isLoading) {
    return (
      <Page>
        <h1 className={classes.title}>Studio Ghibli API</h1>
        <h2 className={classes.loading}>Loading...</h2>
      </Page>
    );
  }

  if (myError) {
    return (
      <Page>
        <h1 className={classes.title}>Studio Ghibli API</h1>
        <h2 className={classes.error}>{myError.message}</h2>
      </Page>
    );
  }

  return (
    <Page>
      <h1 className={classes.title}>Studio Ghibli API</h1>
      <CardsList data={movies} />
      <FilterButton />
    </Page>
  );
}

export default App;
