import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import luxehubReducer from "./luxehubSlice.jsx";

export const store = configureStore({
  reducer: {
    luxehub: luxehubReducer,
  },
});
