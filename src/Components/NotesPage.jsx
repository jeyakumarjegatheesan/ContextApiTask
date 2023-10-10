import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { discContext, noteContext, titleContext } from "../App";

const NotesPage = () => {
  const [title, setTitle] = useContext(titleContext);
  const [discription, setDiscription] = useContext(discContext);
  const [notes, setNotes, edit, setEdit,editId,setEditId] = useContext(noteContext);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const newNotes = notes.filter((element) => {
      if (element.id !== id) {
        return element;
      }
    });
    setNotes(newNotes);
  };

  return (
    <div>
      <h3>My Notes</h3>
      <div className="notePage">
        {notes.map((item) => {
          return (
            <div className="card">
              <div className="card-body">
                <span className="card-title">{item.title}</span>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setEdit(item);
                    navigate("/edit");
                    setEditId(item.id)
                  }}
                >
                  edit
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  delete
                </button>
                <p className="card-text">{item.discription}</p>
                <h5> 5 days ago</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotesPage;
