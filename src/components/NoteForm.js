import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/reducers/notesSlice';

const NoteForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleAddNote = () => {
    if (title && body) {
      dispatch(
        addNote({
          id: Date.now(),
          title,
          body,
        })
      );
      setTitle('');
      setBody('');
    }
  };

  return (
    <div className='add-note1'>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
        className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
      />
      <textarea
        placeholder="Write your note here..."
        value={body}
        onChange={handleBodyChange}
        className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4 h-40"
      />
      <button
        onClick={handleAddNote}
        className="add-note2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Add Note
      </button>
    </div>
  );
};

export default NoteForm;
