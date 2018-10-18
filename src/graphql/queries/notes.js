import gql from "graphql-tag";

import { NOTE_FRAGMENT } from "../fragments";

export const GET_NOTES = gql`
  query GetNotes {
    notes @client {
      ...NoteInfo
    }
  }

  ${NOTE_FRAGMENT}
`;
