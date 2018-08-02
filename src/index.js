import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles/index.css";
import Dictionary from "./components/Dictionary/Dictionary";

ReactDOM.render(
  <Provider store={store}>
    <Dictionary />
  </Provider>,
  document.getElementById("root")
);
