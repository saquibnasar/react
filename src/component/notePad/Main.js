import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";

function Main() {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prevDate) => {
      return [...prevDate, note];
    });
  };
  const onDelete = (id) => {
    setAddItem((oldData) => {
      oldData.filter((curraDate, indx) => {
        return indx !== id;
      });
    });
  };
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {addItem.map((value, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={value.title}
            content={value.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default Main;
