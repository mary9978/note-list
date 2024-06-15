import { useReducer, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import NoteStatus from "./components/NoteStatus";
import { useNote } from "./context/NoteContext";
import NoteHeader from "./components/NoteHeader";
import NoteContainer from "./components/NoteContainer";

function App() {
  const note = useNote();
  const [sortedNotes, setSortNotes] = useState(note);
  const handleTab = (sortedOption) => {
    switch (sortedOption) {
      case "All": {
        setSortNotes(note);
        break;
      }
      case "Completed": {
        setSortNotes(sortedNotes.filter((note) => note.isCompleted));
        break;
      }
      case "UnCompleted": {
        setSortNotes(sortedNotes.filter((note) => !note.isCompleted));
        break;
      }
      default: {
        setSortNotes(note);
        break;
      }
    }
  };
  return (
    <>
      <Toaster />
      <div className="container max-w-screen-md mx-auto h-screen">
        <NoteHeader />
        <NoteStatus onTabClick={handleTab} />
        <NoteContainer sortedNotes={note} />
      </div>
    </>
  );
}

export default App;
