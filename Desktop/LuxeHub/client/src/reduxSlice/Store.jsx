import { configureStore } from "@reduxjs/toolkit";
import luxehubReducer from "./luxehubSlice.jsx";

export const store = configureStore({
  reducer: {
    luxehub: luxehubReducer,
  },
});
