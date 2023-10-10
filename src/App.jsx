import { createContext, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar";
import MainPage from "./Components/MainPage";

import { Route, Routes } from "react-router-dom";
import EditPage from "./Components/EditPage";

export const titleContext = createContext();
export const discContext = createContext();
export const noteContext = createContext();


function App() {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [notes, setNotes] = useState(getNotes);
  const [edit,setEdit] = useState([]);
  const[editId,setEditId] = useState("");
  

   localStorage.setItem("notes", JSON.stringify(notes));

  

  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3" id="sidebar">
              <Sidebar />
              
            </div>
            <div className="col-9" id="note">
              <titleContext.Provider value={[title, setTitle]}>
                <discContext.Provider value={[discription, setDiscription]}>
                  <noteContext.Provider value={[notes, setNotes,edit,setEdit,editId,setEditId]}>
                    
                    <Routes>
                      <Route path="/" element={<MainPage />} />
                      <Route path="/edit" element={<EditPage />} />
                    </Routes>
                    
                  </noteContext.Provider>
                </discContext.Provider>
              </titleContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  function getNotes() {
    const note = JSON.parse(localStorage.getItem("notes"));
    if (note) {
        return note;
      } else {
      return [];
     }
   };
}

export default App;
