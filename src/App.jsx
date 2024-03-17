import { useState } from "react";
import Note from "./components/Note";
import AddNote from "./components/AddNote/AddNote";
import { Toaster, toast } from "react-hot-toast";
import NoteStatus from "./components/NoteStatus/NoteStatus";
import FilteredNotes from "./components/FilteredNotes";

function App() {
  const [note, setNote] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  let sortedNotes = note;
  if (sortBy === "earliest") {
    sortedNotes = [...note].sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sortBy === "latest") {
    sortedNotes = [...note].sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortBy === "completed") {
    sortedNotes = [...note].sort(
      (a, b) => Number(b.isCompleted) - Number(a.isCompleted)
    );
  }
  const handleAddNote = (title, desc, color) => {
    setNote([
      ...note,
      {
        id: parseInt(Math.random() * 100),
        title,
        desc,
        isCompleted: false,
        color,
        category: "",
        date: new Date().toISOString("en-us"),
      },
    ]);
  };
  const handleDeleteNote = (id) => {
    setNote((prevNotes) => prevNotes.filter((noteItem) => noteItem.id !== id));
    toast("your note deleted successfully");
  };
  const handleEdit = (id, { title, desc }) => {
    const index = note.findIndex((noteItem) => noteItem.id === id);
    const Note = [...note];
    Note[index].title = title;
    Note[index].desc = desc;
    setNote(Note);
  };
  const handleCheck = (id) => {
    setNote((prevNote) =>
      prevNote.map((noteItem) =>
        noteItem.id === id
          ? { ...noteItem, isCompleted: !noteItem.isCompleted }
          : noteItem
      )
    );
  };
  return (
    <>
      <Toaster />
      <div className="container-fluid">
        <div className="row justify-content-center mt-5">
        <div className="col-12 d-flex align-items-center justify-content-center gap-3">
        <h2 className="title ">My Notes ({note.length})</h2>
        {sortedNotes.length ?  <FilteredNotes sortBy={sortBy} onSort={(e)=>setSortBy(e.target.value)}/> :''}
        </div>
        </div>
        <div className="row">
          <div className="row">
            <NoteStatus note={sortedNotes} />
          </div>
          <div className="row justify-content-center gap-md-3">
            {sortedNotes.map((noteItem) => (
              <Note
                key={noteItem.id}
                onCheck={handleCheck}
                onDelete={handleDeleteNote}
                onEdit={handleEdit}
                note={noteItem}
              />
            ))}
            <AddNote onAddNote={handleAddNote} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
