import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Todo from "./Todo";
export default function TodoList2() {
  const [item, setItem] = useState();
  const [newItem, setNewItem] = useState([]);
  const eventListener = (event) => {
    setItem(event.target.value);
    // return (let val2 = event.target.placeholder)
  };
  const display = () => {
    setNewItem((prewItem) => {
      return [...prewItem, item];
    });
    setItem(" ");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a item"
            onChange={eventListener}
            value={item}
          />
          <Button variant="contained" className="btn_main" onClick={display}>
            <AddIcon />
          </Button>
          <ol>
            {newItem.map((val, index) => {
              return <Todo key={index} text={val} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
