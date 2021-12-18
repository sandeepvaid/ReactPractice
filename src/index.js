import { StrictMode } from "react";
import ReactDOM from "react-dom";

import MyProject from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <MyProject />
  </StrictMode>,
  rootElement
);
