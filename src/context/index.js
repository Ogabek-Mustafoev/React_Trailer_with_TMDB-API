import { createContext, useReducer } from "react";

const initialValue = {
  loader: false,
  heroItems: [],
  movieDetails: null,
  actors: [],
  videos: [],
};

export const Context = createContext();

function reducer(state = initialValue, { type, payload }) {
  switch (type) {
    case "SET_LOADER":
      return { ...state, loader: payload };
    case "SET_HERO_ITEMS":
      return { ...state, heroItems: payload };
    case "SET_MOVIE_DETAILS":
      return { ...state, movieDetails: payload };
    case "SET_ACTORS":
      return { ...state, actors: payload };
    case "SET_VIDEOS":
      return { ...state, videos: payload };
    default:
      return { state };
  }
}

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
