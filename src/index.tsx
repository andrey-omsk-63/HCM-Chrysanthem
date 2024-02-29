import React from "react";
import ReactDOM from "react-dom";

import { configureStore, Tuple } from "@reduxjs/toolkit";

import rootReducer  from "./reducers";
import apiMiddleware  from "./middleware/api";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(apiMiddleware),
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);