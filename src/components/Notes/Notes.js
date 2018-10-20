import React, { Component } from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

import { GET_NOTES } from "../../graphql/queries";
import Delete from "./Delete";

class Notes extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <Link
              to="/add"
              className="btn-floating btn-large orange darken-1 hide-on-med-and-up"
              style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                zIndex: "999"
              }}
            >
              <i className="material-icons">add</i>
            </Link>
            <h1>
              Dev Notes{" "}
              <Link
                to="/add"
                className="btn-floating btn-large orange darken-1 hide-on-small-only"
              >
                <i className="material-icons">add</i>
              </Link>
            </h1>
            <h5 className="grey-text" style={{ paddingBottom: "24px" }}>
              Taking notes for project app.
            </h5>
            <Query query={GET_NOTES}>
              {({ data }) =>
                data && data.notes && data.notes.length > 0 ? (
                  data.notes.map(note => (
                    <div
                      className="col s12 m4"
                      key={note.id}
                      style={{ position: "relative" }}
                    >
                      <Delete id={note.id} />
                      <Link to={`/note/${note.id}`} className="white-text">
                        <div className="card-panel teal">{note.title}</div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <p className="grey-text"># Currently no notes to display.</p>
                )
              }
            </Query>
          </div>
        </div>
      </div>
    );
  }
}

export default Notes;
