import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header";
import Services from "./Services";
import Features from "./Features";
import Pricing from "./Pricing";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Services />
    <Features />
    <Pricing />
  </React.StrictMode>,
  document.getElementById("root")
);
