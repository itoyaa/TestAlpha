import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { moviesDataArray: [], faveFilter: false };

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    initMovies(state, action) {
      state.moviesDataArray = action.payload;
    },
    removeMovie(state, action) {
      const id = action.payload;
      state.moviesDataArray = state.moviesDataArray.filter(
        (movie) => movie.id !== id
      );
    },
    likeMovie(state, action) {
      const id = action.payload;
      for (let i = 0; i < state.moviesDataArray.length; i++) {
        if (state.moviesDataArray[i].id === id) {
          state.moviesDataArray[i].isFave = !state.moviesDataArray[i].isFave;
        }
      }
    },
    filterToggle(state) {
      state.faveFilter = !state.faveFilter;
    },
  },
});

const store = configureStore({
  reducer: { moviesStore: moviesSlice.reducer },
});

export const moviesActions = moviesSlice.actions;
export default store;
