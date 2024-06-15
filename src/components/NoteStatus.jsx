import React from "react";
import { useNote, useNoteDispatch } from "../context/NoteContext";
function NoteStatus({ onTabClick }) {
  const note = useNote();
  const allNotes = note.length;
  const completedNotes = note.filter((noteItem) => noteItem.isCompleted).length;
  return (
    <ul className="flex gap-x-8 cursor-pointer mt-2 mb-8 ease-in-out duration-300 text-gray-200">
      <li
        onClick={() => onTabClick("All")}
        className="active hover:text-gray-500"
      >
        All ({allNotes})
      </li>
      <li
        onClick={() => onTabClick("Completed")}
        className="active hover:text-gray-500"
      >
        Completed ({completedNotes})
      </li>
      <li
        onClick={() => onTabClick("UnCompleted")}
        className="active hover:text-gray-500"
      >
        Open ({allNotes - completedNotes})
      </li>
    </ul>
  );
}

export default NoteStatus;
