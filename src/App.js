import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import NoteView from './pages/NoteView';
import EditNote from './pages/EditNote';
import NotFound from './pages/NotFound'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note/:noteId" element={<NoteView />} />
        <Route path="/note/:noteId/edit" element={<EditNote />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
};

export default App;
