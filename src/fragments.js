import gql from "graphql-tag";

export const NoteFragment = gql`
  fragment NoteInfo on Note {
    id
    title
    content
  }
`;
