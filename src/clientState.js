import { NoteFragment } from "./fragments";

export const defaults = {
  notes: [
    {
      id: 1,
      title: "First Title",
      content: "First Content",
      __typename: "Note"
    }
  ],
  hello: ""
};

export const typeDefs = [
  `
  schema {
    query: Query
    mutation: Mutation
  }

  type Note {
    id: Int!
    title: String!
    content: String!
  }

  input CreateNoteInput {
    title: String!
    content: String!
  }

  input EditNoteInput {
    id: Int!
    title: String!
    content: String!
  }

  type Query {
    hello: String
    notes: [Note!]
    note(id: Int!): Note
  }

  type Mutation {
    createNote(input: CreateNoteInput!): Boolean
    editNote(input: EditNoteInput!): Boolean
  }
`
];

// Serve as graphql server
export const resolvers = {
  Query: {
    hello: () => "Hello World",

    note: async (_, { id }, { cache }) => {
      // Get data ID from cache
      const noteId = await cache.config.dataIdFromObject({
        __typename: "Note",
        id
      });

      const note = await cache.readFragment({
        fragment: NoteFragment,
        id: noteId
      });

      return note;
    }
  }
};
