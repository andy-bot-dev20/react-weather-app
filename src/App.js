import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";

import AppHeader from "./AppHeader";
import SearchEngine from "./SearchEngine";
import "./CenterDisplay.css";
import Cities from "./Cities";
function CenterDisplay() {
  return (
    <div className="CenterDisplay">
      <AppHeader />
      <SearchEngine />
      <Cities />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CenterDisplay />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
