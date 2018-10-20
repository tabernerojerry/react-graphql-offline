export default [
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
    createNote(input: CreateNoteInput!): Note
    editNote(input: EditNoteInput!): Note
    deleteNote(id: Int!): Boolean
  }
`
];
