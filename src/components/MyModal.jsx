import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import { useNoteDispatch } from "../context/NoteContext";
import TextField from "./TextField";
import { useOutSideClick } from "../hooks/useOutSideClick";
function MyModal({ show, onHide }) {
  const modalRef = useOutSideClick(onHide)
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useNoteDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && desc) {
      dispatch({
        type: "ADD_NOTE",
        payload: {
          id: parseInt(Math.random() * 1000),
          title,
          desc,
          isCompleted: false,
          category: "",
          date: new Date().toISOString("en-us"),
        },
      });
      toast.success("your note added successfully");
    } else {
      toast.error("please enter title and description");
    }
    setDesc("");
    setTitle("");
    onHide();
  };
  return (
    <>
      {show && (
        <div
          
          className="backdrop-blur-sm fixed left-0 top-0 z-50
      w-full h-screen bg-secondary bg-opacity-30"
        >
          <div
            ref={modalRef}
            className="fixed left-1/2 top-1/2 px-5  -translate-x-1/2 -translate-y-1/2
         rounded-lg bg-primary shadow-lg transition-all duration-500 ease-out
         w-[calc(100vw-2rem)] md:max-w-md max-h-[calc(100vh-2rem)] overflow-y-auto p-2"
          >
            <div className="flex items-center justify-end  border-secondary-900 p-2">
              <IoMdClose
                onClick={onHide}
                className="w-5 h-5 hover:cursor-pointer text-gray-400"
              />
            </div>
            <h2 className="text-gray-100 text-xl font-bold">Add your note</h2>
            <p className="text-gray-100 text-sm my-2">
              with note plan your day easily and stay focused
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col w-1/2 my-6">
              <TextField
                type={"text"}
                text={"enter your task"}
                value={title}
                handleChange={(input) => setTitle(input)}
              />
              <TextField
                type={"text"}
                text={"enter your task description"}
                value={desc}
                handleChange={(input) => setDesc(input)}
              />
              <button className="bg-red-500 my-2 p-2 rounded-md text-white font-bold">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default MyModal;
