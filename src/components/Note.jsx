import { MdDelete, MdEdit } from "react-icons/md";
import { useState } from "react";
import TextField from "./TextField";
import toast from "react-hot-toast";
import { useNote, useNoteDispatch } from "../context/NoteContext";
function Note({ note }) {
  const dispatch = useNoteDispatch();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e, noteId) => {
    e.preventDefault();
    if (!title || !desc) return;
    dispatch({ type: "EDITE_NOTE", payload: { noteId, title, desc } });
    toast.success("your note edited successfully");
    setEdit(false);
    setDesc("");
    setTitle("");
  };
  const handleDeleteNote = (id) => {
    dispatch({ type: "DELETE_NOTE", payload: id });
  };
  const handleCheck = (id) => {
    dispatch({ type: "COMPLETE_NOTE", payload: id });
  };
  return (
    <div key={note.id} className={`flex flex-col rounded-lg p-4 bg-gray-400 `}>
      {/* <div className=""> */}
      <span className="note-date">
        {new Date(note.date).toLocaleDateString("en-US", {
          day: "numeric",
          year: "numeric",
          month: "long",
        })}
      </span>
      {edit ? (
        <>
          <form className="mt-2" onSubmit={(e) => handleSubmit(e, note.id)}>
            <TextField
              text={note.title}
              value={title}
              handleChange={(input) => setTitle(input)}
            />
            <TextField
              value={desc}
              handleChange={(input) => setDesc(input)}
              text={note.desc.slice(0, 22) + " ..."}
            />
            <div className="flex gap-x-4 mt-2">
              <button
                className="bg-yellow-400 px-2 py-1 rounded-lg"
                type="submit"
              >
                edit
              </button>
              <button
                onClick={() => setEdit(false)}
                className="bg-red-500 px-2 py-1 rounded-lg"
              >
                cancel
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <div className="my-2 flex items-center justify-between">
            {" "}
            <h5
              className={`text-secondary font-bold ${
                note.isCompleted ? "completed" : ""
              }`}
            >
              {note.title}
            </h5>
            <div className="flex items-center gap-2">
              <MdEdit
                onClick={() => setEdit(true)}
                className="w-4 h-4 cursor-pointer"
              />
              <input
                className="w-4 h-4 rounded-xl"
                onChange={(e) => handleCheck(note.id)}
                type="checkbox"
                checked={note.isCompleted}
                name="complete-note"
              />
              <MdDelete
                className="w-5 h-5 text-red-500 cursor-pointer"
                onClick={() => handleDeleteNote(note.id)}
              />
            </div>
          </div>

          <p class="card-text note-desc">{note.desc}</p>
        </>
      )}
      {/* </div> */}
    </div>
  );
}

export default Note;
