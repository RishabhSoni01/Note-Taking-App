import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'; 
import { editNote } from '../redux/reducers/notesSlice';

const EditNote = () => {
  const { noteId } = useParams();
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const note = notes.find((note) => note.id === parseInt(noteId));

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setBody(note.body);
    }
  }, [note]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const navigate = useNavigate(); 
  const handleEditNote = () => {
    if (title && body) {
      dispatch(
        editNote({
          id: parseInt(noteId),
          title,
          body,
        })
      );
      navigate('/'); 
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="edit1 text-2xl font-bold mb-4">Edit Note</h2>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        className="edit2 w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
      />
      <textarea
        value={body}
        onChange={handleBodyChange}
        className="edit3 w-full border border-gray-300 rounded-md py-2 px-3 mb-4 h-40"
      />
      <button
        onClick={handleEditNote}
        className="edit4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditNote;
