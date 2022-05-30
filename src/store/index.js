import React, { useCallback } from "react";

import { createStore } from "redux";

const initialState = { moviesDataArray: [], faveFilter: false };

const counterReducer = (state = initialState, action) => {
  if (action.type === "init") {
    return { moviesDataArray: action.data, faveFilter: state.faveFilter };
  }

  if (action.type === "filterToggle") {
    return {
      moviesDataArray: state.moviesDataArray,
      faveFilter: !state.faveFilter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
