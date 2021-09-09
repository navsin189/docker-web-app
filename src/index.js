import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Docker from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Docker />
  </StrictMode>,
  rootElement
);
