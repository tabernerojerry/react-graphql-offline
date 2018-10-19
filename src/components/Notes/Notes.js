import React, { Component } from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

import { GET_NOTES } from "../../graphql/queries";

class Notes extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s8">
            <h1>Dev Notes</h1>
            <h5 className="grey-text">Taking notes for project app.</h5>
            <Query query={GET_NOTES}>
              {({ data }) =>
                data && data.notes
                  ? data.notes.map(note => (
                      <div className="col s4" key={note.id}>
                        <Link to={`/edit/${note.id}`} className="white-text">
                          <div className="card-panel teal">{note.title}</div>
                        </Link>
                      </div>
                    ))
                  : null
              }
            </Query>
          </div>
        </div>
      </div>
    );
  }
}

export default Notes;
