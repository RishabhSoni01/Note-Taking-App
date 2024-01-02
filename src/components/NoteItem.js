import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../redux/reducers/notesSlice';

const NoteItem = ({ note }) => {
  const dispatch = useDispatch();

  const handleDeleteNote = () => {
    dispatch(deleteNote(note.id));
  };

  return (
    <div className="note-item1 bg-white shadow-md p-4 mb-4 rounded-lg">
      <Link to={`/note/${note.id}`} className="text-xl font-bold">
        {note.title}
      </Link>
      <p className="note-item2 text-gray-600">{note.body.substring(0, 50)}...</p>
      <div className='note-item3'>
        <Link to={`/note/${note.id}`} className="note-item4 text-blue-500 mr-2">
          View
        </Link>
        <Link to={`/note/${note.id}/edit`} className="note-item5 text-blue-500 mr-2">
          Edit
        </Link>
        <button onClick={handleDeleteNote} className="note-item6 text-red-500">
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
