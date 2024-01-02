export const loadNotes = () => {
  try {
    const serializedNotes = localStorage.getItem('notes');
    if (serializedNotes === null) {
      return [];
    }
    return JSON.parse(serializedNotes);
  } catch (err) {
    console.error('Error loading notes from local storage:', err);
    return [];
  }
};

export const saveNotes = (notes) => {
  try {
    const serializedNotes = JSON.stringify(notes);
    localStorage.setItem('notes', serializedNotes);
  } catch (err) {
    console.error('Error saving notes to local storage:', err);
  }
};
