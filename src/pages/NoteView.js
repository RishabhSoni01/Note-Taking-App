import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { deleteNote } from '../redux/reducers/notesSlice';

const NoteView = () => {
  const { noteId } = useParams();
  const note = useSelector((state) =>
    state.notes.notes.find((note) => note.id === parseInt(noteId))
  );
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const handleDelete = () => {
    dispatch(deleteNote(note.id));
    navigate('/');
  };

  if (!note) {
    return <div>Note not found</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="view1 max-w-lg mx-auto bg-white shadow-md p-8 rounded-lg">
        <h2 className="view2 text-2xl font-bold mb-4">{note.title}</h2>
        <p className="view3 text-gray-700">{note.body}</p>
        <div className="view4 flex justify-between mt-4">
          <Link
            to={`/note/${noteId}/edit`}
            className="view5 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Edit Note
          </Link>
          <button
            onClick={handleDelete}
            className="view6 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Delete Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteView;
