import React from "react";
import { hydrate } from "react-dom";
import App from "../shared/App";
import { BrowserRouter } from "react-router-dom";

hydrate(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById("app")
);

//hydrate tell react we already the markup on the server, no need to re-create on the client
//
