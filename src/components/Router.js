import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Add, Edit, Note, Notes } from "./Notes";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route path="/add" component={Add} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/note/:id" component={Note} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;

// NEXT : #1.9
