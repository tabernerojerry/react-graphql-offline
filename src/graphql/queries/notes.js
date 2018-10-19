import gql from "graphql-tag";

import { NOTE_FRAGMENT } from "../fragments";

export const CREATE_NOTE = gql`
  mutation CreateNote($input: CreateNoteInput!) {
    createNote(input: $input) @client {
      ...NoteInfo
    }
  }

  ${NOTE_FRAGMENT}
`;

export const EDIT_NOTE = gql`
  mutation EditNote($input: EditNoteInput!) {
    editNote(input: $input) @client {
      ...NoteInfo
    }
  }

  ${NOTE_FRAGMENT}
`;

export const GET_NOTES = gql`
  query GetNotes {
    notes @client {
      ...NoteInfo
    }
  }

  ${NOTE_FRAGMENT}
`;

export const GET_NOTE = gql`
  query GetNote($id: Int!) {
    note(id: $id) @client {
      ...NoteInfo
    }
  }

  ${NOTE_FRAGMENT}
`;
