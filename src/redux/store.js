import { configureStore } from '@reduxjs/toolkit';
import notesSlice from './reducers/notesSlice';
import { loadNotes, saveNotes } from '../utils/localStorage';

const preloadedState = {
  notes: {
    notes: loadNotes() || [], 
  },
};

const store = configureStore({
  reducer: {
    notes: notesSlice,
  },
  preloadedState,
});


store.subscribe(() => {
  const state = store.getState();
  saveNotes(state.notes.notes);
});

export default store;
