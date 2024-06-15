import { useReducer, useState } from "react";
import FilteredNotes from "./components/FilteredNotes";
import AddNote from "./components/AddNote/AddNote";
import { Toaster, toast } from "react-hot-toast";
import NoteStatus from "./components/NoteStatus/NoteStatus";
import { useNote } from "./context/NoteContext";
import NoteHeader from "./components/NoteHeader";
import NoteContainer from "./components/NoteContainer";

import NavBar from "./components/NavBar";
import NoteList from "./components/NoteList";
function App() {
  const note = useNote();
  console.log(note)
  const [sortedNotes,setSortNotes] = useState(note);
  const handleTab =(sortedOption)=>{    
    switch (sortedOption) {
      case "All": {
        setSortNotes(note);
        break;
      }
      case "Completed":{
        setSortNotes(sortedNotes.filter(note => note.isCompleted));
        break;
      }
      case "UnCompleted":{
        setSortNotes(sortedNotes.filter(note => !note.isCompleted));
        break;
      }
      default:{
        setSortNotes(note);
        break;
      }
    }
    console.log(sortedNotes)
  }
  return (
    <>
      <Toaster />
      <div className="container max-w-screen-md mx-auto h-screen">
        <NoteHeader>
{/* 

        {note.length ? (
          <FilteredNotes
            // sortBy={sortBy}
            // onSort={(e) => setSortBy(e.target.value)}
          />
        ) : (
          ""
        )} */}
        </NoteHeader>


        <NoteStatus onTabClick={handleTab}/>
        <NoteContainer sortedNotes={note}/>
        {/* <AddNote /> */}



      </div>
    </>
  );
}

export default App;
