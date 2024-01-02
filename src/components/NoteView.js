// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link, useParams } from 'react-router-dom';

// const NoteView = () => {
//   const { noteId } = useParams();
//   const note = useSelector((state) =>
//     state.notes.notes.find((note) => note.id === parseInt(noteId))
//   );

//   if (!note) {
//     return <div>Note not found</div>;
//   }

//   return (
//     <div className="container mx-auto mt-8">
//       <div className="max-w-lg mx-auto bg-white shadow-md p-8 rounded-lg">
//         <h2 className="text-2xl font-bold mb-4">{note.title}</h2>
//         <p className="text-gray-700">{note.body}</p>
//         <Link
//           to="/"
//           className="block mt-6 text-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
//         >
//           Back to Notes
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default NoteView;
