import React from 'react';
import { useSelector } from 'react-redux';
import NoteItem from './NoteItem';

const NoteList = () => {
  const notes = useSelector((state) => state.notes.notes);

  return (
    <div>
      {notes.length ? (
        notes.map((note) => <NoteItem key={note.id} note={note} />)
      ) : (
        <p>No notes available</p>
      )}
    </div>
  );
};

export default NoteList;
