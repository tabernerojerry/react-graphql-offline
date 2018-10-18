import gql from "graphql-tag";

export const NOTE_FRAGMENT = gql`
  fragment NoteInfo on Note {
    id
    title
    content
  }
`;
