import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const { note, updateNote } = props;

  const notescontext = useContext(noteContext);
  const { deleteNote } = notescontext;

  return (
    <div className="col-md-6 ">
      <div className="card border-success mb-3 ">
        <div className="card-body ">
          <div className="card-header bg-transparent border-success ">
            <h3 className="d-inline">{note.title}</h3>
            <div className="d-inline" style={{ float: "right" }}>
              <i
                className="fa-solid fa-pen-to-square fa-lg "
                onClick={() => {
                  updateNote(note);
                }}
              ></i>
              <i
                className="fa-solid fa-trash fa-lg  mx-3" 
                onClick={() => {
                  props.toggleAlert("success", "Note deleted");
                  deleteNote(note._id);
                }}
              ></i>
            </div>
          </div>
          <p className="card-text my-2">{note.description}</p>
          {note.tag ? (
            <div className="card-footer bg-transparent border-success">
              {note.tag}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
