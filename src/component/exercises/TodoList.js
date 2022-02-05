import React, { useState } from "react";
export default function TodoList() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItem = () => {
    setItems((oldItem) => {
      return [...oldItem, inputList];
    });
    setInputList("");
  };
  const deleteItem = () => {
    setItems((oldItem) => {
      return oldItem.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="main_div">
      <div className="list">
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add a item"
          onChange={itemEvent}
          value={inputList}
        />
        <button onClick={listOfItem}>+</button>
        <ol>
          {items.map((itemValue, index) => {
            const id = { index };
            return (
              <>
                <div className="todo_style">
                  <i
                    key={index}
                    className="fa fa-times"
                    aria-hidden="true"
                    onClick={() => {
                      deleteItem(id);
                    }}
                  />
                  <li>{itemValue}</li>
                </div>
              </>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
