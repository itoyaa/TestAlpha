import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./App.module.css";

import CardsList from "./components/Card/CardsList";
import Page from "./components/UI/Page";
import FilterButton from "./components/Filters/FilterButton";

function App() {
  const dispatch = useDispatch();

  // const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    // setError(null);

    try {
      const response = await fetch("https://ghibliapi.herokuapp.com/films/");

      if (!response.ok) {
        throw new Error("Something went wrong...");
      }

      const data = await response.json();
      console.log(data);

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
      dispatch({ type: "init", data: convertedData });
    } catch (error) {
      // setError(error.message);
      console.log(error.message);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  const movies = useSelector((state) => state.moviesDataArray);

  return (
    <Page>
      <h1 className={classes.title}>Studio Ghibli API</h1>
      <CardsList data={movies} />
      <FilterButton pressed={true} />
    </Page>
  );
}

export default App;
