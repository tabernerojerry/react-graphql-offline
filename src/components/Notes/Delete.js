import React from "react";
import { Mutation } from "react-apollo";

import { DELETE_NOTE, GET_NOTES } from "../../graphql/queries";

const _onDelete = ({ deleteNote, id }) => async () =>
  await deleteNote({
    variables: { id },
    // Optimistic UI Update
    update: cache => {
      const { notes } = cache.readQuery({ query: GET_NOTES });

      cache.writeQuery({
        query: GET_NOTES,
        data: { notes: notes.filter(note => note.id !== id) }
      });
    }
  });

const Delete = ({ id }) => (
  <Mutation mutation={DELETE_NOTE}>
    {deleteNote => (
      <button
        style={{ position: "absolute", right: "0" }}
        className="btn-floating grey lighten-3"
        onClick={_onDelete({ deleteNote, id })}
      >
        <i className="material-icons grey-text">delete</i>
      </button>
    )}
  </Mutation>
);

export default Delete;
