import React from "react";
import { Mutation } from "react-apollo";

import Editor from "./Editor";
import { CREATE_NOTE } from "../../graphql/queries";

const onSave = ({ createNote, history }) => input => {
  // save note
  createNote({ variables: { input } });

  // redirect to notes page
  history.push("/");
};

const Add = ({ history }) => (
  <Mutation mutation={CREATE_NOTE}>
    {createNote => <Editor onSave={onSave({ createNote, history })} />}
  </Mutation>
);

export default Add;
