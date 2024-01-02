import React from 'react';
import NoteList from '../components/NoteList'; 
import NoteForm from '../components/NoteForm'; 

const Home = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="home2 text-3xl font-bold mb-4">Note Taking App</h1>
      <div className="home3 flex justify-between">
        <div className="home4 w-2/5">
          <h2 className="home5 text-2xl font-bold mb-2">Create a New Note</h2>
          <NoteForm />
        </div>
        <div className="home6 w-2/5">
          <h2 className="home7 text-2xl font-bold mb-2">Notes</h2>
          <NoteList />
        </div>
      </div>
    </div>
  );
};

export default Home;