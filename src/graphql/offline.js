import { GET_NOTES } from "./queries";

// Save Notes to localStorage
export const saveNotes = cache => {
  const { notes } = cache.readQuery({ query: GET_NOTES });

  try {
    localStorage.setItem("notes", JSON.stringify(notes));
  } catch (error) {
    console.log("Error: ", error);
  }
};

// Get Notes to localStorage
export const restoreNotes = () => {
  const notes = localStorage.getItem("notes");

  if (notes) return JSON.parse(notes);

  return [];
};
