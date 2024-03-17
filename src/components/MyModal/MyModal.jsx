import React ,{useState} from 'react'
import { Modal, Button } from "react-bootstrap";
import './modal.css';
import toast from "react-hot-toast";
function MyModal(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [color,setColor] = useState("#FFFFFF");
    const handleSubmit = (e) => {
      e.preventDefault();
      if (title && desc) {
        props.onAddNote(title,desc,color);
        toast.success("your note added successfully");
      } else {
        toast.error("please enter title and description");
      }
      setDesc("");
      setTitle("");
      setColor("#FFFFFF")
    };
    return (
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Enter New Note
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="d-flex flex-column w-75 gap-3" onSubmit={handleSubmit}>
              <input
                onChange={(e) => setTitle(e.target.value)}
                className="textfield"
                type="text"
                value={title}
                placeholder="Note Title"
              />
              <textarea
                onChange={(e) => setDesc(e.target.value)}
                className="textfield"
                placeholder="Note Description"
                value={desc}
                cols="2"
                rows="2"
              ></textarea>
              <label htmlFor='color'>pick color</label>
              <input
               className='color-input'
               onChange={(e) => setColor(e.target.value)}
               value={color} type="color" name="color" id="color" />
              <button className="btn-style" type="submit">
                add new note
              </button>
            </form>
          </Modal.Body>
        </Modal>
      );
}

export default MyModal