import React from "react";
import "./notestatus.css";
function NoteStatus({ note }) {
  const allNotes = note.length;
  const completedNotes = note.filter((noteItem) => noteItem.isCompleted).length;
  return (
    <div className="col-12 col-md-6 mx-auto mt-3">
      <ul className="note-status__div">
        <li className="active">All ({allNotes})</li>
        <li>Completed ({completedNotes})</li>
        <li>Open ({allNotes - completedNotes})</li>
      </ul>
    </div>
  );
}

export default NoteStatus;
