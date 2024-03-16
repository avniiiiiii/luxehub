import React from "react";
import { render } from "react-dom"; // Changed from createRoot to render
import { Provider } from "react-redux";
import { store } from "./Redux/Store.jsx";
import "./index.css";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
