import React, { useContext, useEffect } from "react";
import { discContext, noteContext, titleContext } from "../App";
import { useNavigate } from "react-router-dom";

const EditPage = () => {
  const [title, setTitle] = useContext(titleContext);
  const [discription, setDiscription] = useContext(discContext);
  const [notes, setNotes, edit, setEdit, editId, setEditId] =useContext(noteContext);

  const navigate=useNavigate();

   const handleChange = (e) => {
    if (e.target.id == "title") {
      setEdit(edit.title=e.target.value);
    } else {
      setEdit(edit.discription=e.target.value);
    }
  };

  const handleUpdate = () => {
    const editNote = notes.map((note) => {
      if (editId === note.id) {
        return ({
          ...note,title: document.getElementById("editTitle").value,
          discription: document.getElementById("editDisc").value,
        });
      }else{
        return note;
      }
    });
    console.log(editNote)
    setNotes(editNote)
     navigate("/")
    
  };

  return (
    <div className="editPage">
      <div>
        <div className="inputArea">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="editTitle"
              placeholder="Title"
              value={edit.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="editDisc"
              rows="10"
              placeholder="Take a note"
              value={edit.discription}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleUpdate}
           

          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
