import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const Addnote = (props) => {
  const notescontext = useContext(noteContext);
  const { addNote } = notescontext;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const notesubmition = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    
    props.toggleAlert("success", "Note added");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container my-3  d-inline " style={{ textAlign: "left" }}>
        <div className="mb-3 ">
          <label htmlFor="yitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="The Title"
            value={note.title}
            onChange={onChange}
            minLength={3}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={note.description}
            onChange={onChange}
            minLength={5}
            required
          ></textarea>
        </div>
        <div className="mb-3 ">
          <label htmlFor="yitle" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
            placeholder="Tags"
            onChange={onChange}
          /> 
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-dark"
            style={{ textAlign: "left" }}
            onClick={notesubmition}
            disabled={note.title.length < 5 || note.description.length < 5}
          >
            Add note
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addnote;
