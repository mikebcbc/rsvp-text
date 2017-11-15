import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./reset.css";
import "./index.css";

import Root from "./components/Root/Root";

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
