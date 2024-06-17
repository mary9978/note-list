import React, { useState } from "react";
import { useNote, useNoteDispatch } from "../context/NoteContext";
import { CiSearch } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import MyModal from "./MyModal";
function NoteHeader({onSearch,searchValue}) {
  const [showModal, setShowModal] = useState(false);
 
  const dispatch = useNoteDispatch();
  return (
    <nav className="flex justify-between items-center h-20 ">
      <div className="flex items-center gap-x-1 bg-secondary p-2 rounded-lg">
        <CiSearch className="text-gray-200 w-4 h-4" />
        <input
          onChange={onSearch}
          value={searchValue}
          className="bg-transparent text-gray-200"
          type="text"
          placeholder="search note"
        />
      </div>
      <div className="bg-red-600 w-8 h-8 rounded-sm flex justify-center items-center cursor-pointer">
        <MdAdd
          onClick={() => setShowModal(true)}
          className="text-gray-100 w-5 h-5"
        />
        <MyModal show={showModal} onHide={() => setShowModal(false)} />
      </div>
  
    </nav>
  );
}

export default NoteHeader;
