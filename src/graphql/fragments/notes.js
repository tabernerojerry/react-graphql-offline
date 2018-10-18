import gql from "graphql-tag";

const NOTE_FRAGMENT = gql`
  fragment NoteInfo on Note {
    id
    title
    content
  }
`;

export default NOTE_FRAGMENT;
