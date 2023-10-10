import React, { useContext } from "react";
import NotesPage from "./NotesPage";
import { discContext, noteContext, titleContext } from "../App";


const MainPage = () => {
  const [title, setTitle] = useContext(titleContext);
  const [discription, setDiscription] = useContext(discContext);
  const [notes, setNotes] = useContext(noteContext);

  const handleChange = (e) => {
    if (e.target.id == "title") {
      setTitle(e.target.value);
    } else {
      setDiscription(e.target.value);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

   if(title!==""&&discription!==""){ 
    setNotes((note) => {
      return [
        ...note,
        {
          title: title,
          discription: discription,
          id: new Date().getTime(),
        },
      ];
    });
  }
  };

  return (
    <>
      <div>
        <div className="mainPage">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClick}
          >
            ADD Notes
          </button>
          <div className="inputArea">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
                value={title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="disc"
                rows="5"
                placeholder="Take a note"
                value={discription}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>

        <div>
         
                <NotesPage />
                
            
        </div>
      </div>
    </>
  );
};

export default MainPage;
