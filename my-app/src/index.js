import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "./Container";
import * as React from "react";

import "./Styles/css/main.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Container />
  </StrictMode>
);
