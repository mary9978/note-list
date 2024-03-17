import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { useState } from "react";
import TextField from "./TextField/TextField";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import toast from "react-hot-toast";
function Note({ note, onDelete, onEdit, onCheck }) {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e, noteId) => {
    e.preventDefault();
    if (!title || !desc) return;
    onEdit(noteId, { title, desc });
    toast.success("your note edited successfully");
    setEdit(false);
    setDesc("");
    setTitle("");
  };
  return (
    <div
      key={note.id}
      className="col-10 col-md-4 col-lg-3  card my-3"
      style={{ background: note.color }}
    >
      <div className="card-body">
        <span className="note-date">
          {new Date(note.date).toLocaleDateString("en-US", {
            day: "numeric",
            year: "numeric",
            month: "long",
          })}
        </span>

        {edit ? (
          <>
            <form onSubmit={(e) => handleSubmit(e, note.id)}>
              <div className=" d-flex align-items-center justify-content-end">
                {" "}
                <button className="edit-btn" type="submit">
                  <CiCircleCheck className="mb-3" color="green" fontSize={30} />
                </button>
              </div>
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
            </form>
          </>
        ) : (
          <>
            <div className=" my-2 d-flex align-items-center justify-content-between">
              {" "}
              <h5
                className={`note-title ${note.isCompleted ? "completed" : ""}`}
              >
                {note.title}
              </h5>
              <div className="d-flex align-items-center gap-2">
                <AiFillEdit
                  onClick={() => setEdit(true)}
                  className="edit-note"
                />
                <input
                  className="input-complete__note"
                  onChange={(e) => onCheck(note.id)}
                  type="checkbox"
                  checked={note.isCompleted}
                  name="complete-note"
                />
                <MdDelete onClick={() => onDelete(note.id)} />
              </div>
            </div>
            <hr />
            <p class="card-text note-desc">{note.desc}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Note;
