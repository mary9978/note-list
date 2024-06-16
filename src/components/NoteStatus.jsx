import React from "react";
import { useNote, useNoteDispatch } from "../context/NoteContext";
function NoteStatus({sortBy,onSort}) {
  const note = useNote();
  const allNotes = note.length;
  const completedNotes = note.filter((noteItem) => noteItem.isCompleted).length;
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <ul className="flex gap-x-8  mt-2 mb-4 md:mb-8  text-gray-200">
      <li className="active">All ({allNotes})</li>
      <li className="active">Completed ({completedNotes})</li>
      <li className="active">Open ({allNotes - completedNotes})</li>
      </ul>
      <select className="rounded-md p-1 mb-8 md:mb-6 text-gray-200 text-sm bg-secondary" 
      value={sortBy}
       onChange={onSort}>
        <option value="latest">Sort based on latest notes</option>
        <option value="earliest">Sort based on earliest notes</option>
        <option value="completed">Sort based on completed notes</option>
      </select>
    </div>
  );
}

export default NoteStatus;
