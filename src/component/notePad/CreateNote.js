import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const eventListener = (event) => {
    const { value, name } = event.target;
    setNote((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  return (
    <>
      <div className="main_note">
        <form>
          <input
            type="text"
            placeholder="Title"
            value={note.title}
            name="title"
            autoComplete="off"
            onChange={eventListener}
          />
          <textarea
            rows=""
            onChange={eventListener}
            column=""
            name="content"
            value={note.content}
            placeholder="Write a note..."
          />
          <Button variant="contained" color="success" onClick={addEvent}>
            <AddIcon className="plus_sign" />
          </Button>
        </form>
      </div>
    </>
  );
}
