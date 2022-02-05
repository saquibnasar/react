import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo(props) {
  const [line, setLine] = useState(false);
  const textDecor = () => {
    setLine(true);
  };
  return (
    <>
      <div className="todo_style">
        <span className="deleteIcon" onClick={textDecor}>
          <DeleteIcon />
        </span>
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
          {props.text}
        </li>
      </div>
    </>
  );
}
