import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    editNote: (state, action) => {
      const { id, title, body } = action.payload;
      const noteToEdit = state.notes.find((note) => note.id === id);
      if (noteToEdit) {
        noteToEdit.title = title;
        noteToEdit.body = body;
      }
    },
  },
});

export const { addNote, deleteNote, editNote } = notesSlice.actions;
export default notesSlice.reducer;