import React from "react";
import { Query, Mutation } from "react-apollo";

import { GET_NOTE, EDIT_NOTE } from "../../graphql/queries";
import Editor from "./Editor";

const onSave = ({ editNote, history }) => input => {
  // save note
  editNote({ variables: { input } });

  // redirect to notes page
  history.push("/");
};

const Edit = ({ match, history }) => (
  <Query query={GET_NOTE} variables={{ id: match.params.id }}>
    {({ data }) =>
      data && data.note ? (
        <Mutation mutation={EDIT_NOTE}>
          {editNote => (
            <Editor
              id={data.note.id}
              title={data.note.title}
              content={data.note.content}
              onSave={onSave({ editNote, history })}
            />
          )}
        </Mutation>
      ) : null
    }
  </Query>
);

export default Edit;
