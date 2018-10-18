import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const helloQuery = gql`
  query {
    hello
  }
`;

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello World</h1>;<Query query={helloQuery}>{data => null}</Query>
      </div>
    );
  }
}

export default App;
