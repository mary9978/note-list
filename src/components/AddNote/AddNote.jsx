import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { Modal, Button } from "react-bootstrap";
import "./addnote.css";

import MyModal from "../MyModal/MyModal";

function AddNote({onAddNote}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="col-10 col-md-4 col-lg-3 mx-auto mx-md-0 add-note my-3" onClick={() => setShowModal(true)}>
        <BiSolidEdit fontSize={25} />
        <button className="add-note__button">New Note</button>
      </div>
      <MyModal onAddNote={onAddNote}  show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
}

export default AddNote;

