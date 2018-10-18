import { NOTE_FRAGMENT } from "../fragments";
import { GET_NOTES } from "../queries";

export default {
  Query: {
    hello: () => "Hello World",

    note: async (_, { id }, { cache }) => {
      // Get data ID from cache
      const noteId = await cache.config.dataIdFromObject({
        __typename: "Note",
        id
      });

      const note = await cache.readFragment({
        fragment: NOTE_FRAGMENT,
        id: noteId
      });

      return note;
    }
  },

  Mutation: {
    createNote: async (_, { input }, { cache }) => {
      // Get data from cache
      const { notes } = await cache.readQuery({
        query: GET_NOTES
      });
      //console.log(notes);

      // New Note Data
      const newNote = {
        __typename: "Note",
        id: notes.length + 1,
        title: input.title,
        content: input.content
      };

      // Create Data
      cache.writeData({
        data: {
          notes: [newNote, ...notes]
        }
      });

      return newNote;
    },

    editNote: async (_, { input }, { cache }) => {
      // Get Data ID from cache
      const id = await cache.config.dataIdFromObject({
        __typename: "Note",
        id: input.id
      });

      const note = await cache.readFragment({ fragment: NOTE_FRAGMENT, id });

      const updatedNote = {
        ...note,
        title: input.title,
        content: input.content
      };

      cache.writeFragment({
        id,
        fragment: NOTE_FRAGMENT,
        data: updatedNote
      });

      return updatedNote;
    }
  }
};
