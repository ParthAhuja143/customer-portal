// index.tsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import CustomerPortal from "./components/CustomerPortal/CustomerPortal";
import './App.css'
import "react-loading-skeleton/dist/skeleton.css";

ReactDOM.render(
  <Provider store={store}>
    <CustomerPortal />
  </Provider>,
  document.getElementById("root")
);
