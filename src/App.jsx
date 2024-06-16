import { useState,useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import NoteStatus from "./components/NoteStatus";
import { useNote } from "./context/NoteContext";
import NoteHeader from "./components/NoteHeader";
import NoteContainer from "./components/NoteContainer";

function App() {
  const [sortBy, setSortBy] = useState("latest");
  return (
    <>
      <Toaster />
      <div className="container max-w-screen-md mx-auto h-screen px-4 md:px-10 lg:px-0">
        <NoteHeader />
        <NoteStatus sortBy={sortBy} onSort={(e)=> setSortBy(e.target.value)}/>
        <NoteContainer sortBy={sortBy} />
      </div>
    </>
  );
}

export default App;
