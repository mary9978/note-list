import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import "./addnote.css";

import MyModal from "../MyModal";

function AddNote() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className="col-10 col-md-4 col-lg-3 mx-auto mx-md-0 add-note my-3"
        onClick={() => setShowModal(true)}
      >
        <BiSolidEdit fontSize={25} />
        <button className="add-note__button">New Note</button>
      </div>
      <MyModal show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
}

export default AddNote;
