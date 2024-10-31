import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [counter, setCounter] = useState(0);

  function handleAddNote(input) {
    const { title, content } = input;

    setNotes((prev) => [
      ...prev,
      {
        id: counter,
        title,
        content,
      },
    ]);

    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={handleAddNote} />
      {notes.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;