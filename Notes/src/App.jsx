import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
// import { data } from "./data"
import Split from "react-split";
import { nanoid } from "nanoid";

export default function App() {
  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("Notes")) || []
  );
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0]?.id) || ""
  );

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    setNotes((oldNotes) => {
      const updatedNote = oldNotes.find((note) => note.id === currentNoteId);
      const newNote = { ...updatedNote, body: text };

      const otherNotes = oldNotes.filter((note) => note.id !== currentNoteId);
      return [newNote, ...otherNotes];
    });
  }

  function deleteNote(event, noteId) {
    event.stopPropagation();
    setNotes((prevNotes) => prevNotes.filter((note) => note.id != noteId));
  }

  const currentNote = notes.find(note => note.id === currentNoteId) || notes[0];
  
  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={currentNote}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={currentNote} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
