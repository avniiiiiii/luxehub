import { configureStore } from "@reduxjs/toolkit";
import luxehubReducer from "./Redux/luxehubSlice.jsx";

export const store = configureStore({
  reducer: {
    luxehub: luxehubReducer,
  },
});
