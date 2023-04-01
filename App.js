import React from "react";
import ReactDOM from "react-dom/client";

const parent = (
  <div>
    <h1>Hello World</h1>
    <h2>Learn React</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
