import React, { useState } from "react";
import todo from "./img/todo.svg";
export default function Todo() {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState([]);
  const [toggleSumbmit, setToggleSumbmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);
  const addItem = () => {
    if (!inputData) {
    } else if (inputData && !toggleSumbmit) {
      setItem(
        item.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setToggleSumbmit(true);
      setInputData("");
      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItem([...item, allInputData]);
      setInputData("");
    }
  };
  const deletItem = (index) => {
    const update = item.filter((elm) => {
      return index !== elm.id;
    });
    setItem(update);
  };
  const editItem = (id) => {
    let newItem = item.find((elem) => {
      return elem.id === id;
    });
    setToggleSumbmit(false);
    setInputData(newItem.name);
    setIsEditItem(id);
  };
  const removeAll = () => {
    setItem([]);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="TodoLogo" />
            <figcaption>Add Your List Here 👍</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              value={inputData}
              placeholder="✍️ Add Items ..."
              onChange={(e) => setInputData(e.target.value)}
            />
            {toggleSumbmit ? (
              <i
                className="fa fa-plus addbtn"
                title="Add Items"
                onClick={addItem}
              />
            ) : (
              <i
                className="fa fa-edit addbtn"
                title="Add Items"
                onClick={addItem}
              />
            )}
          </div>
          <div className="showItems">
            {item.map((element) => {
              return (
                <div className="eachItem" key={element.id}>
                  <h3>{element.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="fa fa-edit add-btn back"
                      title="Edit Items"
                      onClick={() => editItem(element.id)}
                    />
                    <i
                      className="fa fa-trash-alt add-btn back"
                      title="Delet Items"
                      onClick={() => deletItem(element.id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
