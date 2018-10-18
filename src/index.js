import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import client from "./ApolloClient";
import Router from "./components/Router.js";

render(
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>,
  document.getElementById("root")
);
