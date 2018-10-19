import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { GET_NOTE } from "../../graphql/queries";
import Back from "../Back";

const Note = ({
  match: {
    params: { id }
  }
}) => (
  <Query query={GET_NOTE} variables={{ id }}>
    {({ data }) =>
      data && data.note ? (
        <>
          <Back />
          <div className="container">
            <div className="row">
              <div className="col s8">
                <h1 className="grey-text">{data.note.title}</h1>
                <ReactMarkdown source={data.note.content} />
              </div>
              <div className="col s4">
                <Link
                  to={`/edit/${data.note.id}`}
                  className="btn btn-large right orange darken-1"
                  style={{ marginTop: "4.5rem" }}
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : null
    }
  </Query>
);

export default Note;
