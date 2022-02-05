import React, { useState } from "react";

export default function Form() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
    number: "",
  });

  const inputEvent = (event) => {
    const { value, name } = event.target;
    setFullName((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  const onSubmit = (event) => {
    alert("form submitted");
  };
  return (
    <div>
      <h1>
        Hello {fullName.fName} {fullName.lName}
        <br />
        <p>{fullName.email}</p>
        <p> {fullName.number} </p>
      </h1>
      <input
        type="text"
        placeholder="Enter your name"
        name="fName"
        onChange={inputEvent}
        value={fullName.fName}
      />
      <input
        type="text"
        placeholder="Enter your name"
        name="lName"
        onChange={inputEvent}
        value={fullName.lName}
      />
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        onChange={inputEvent}
        value={fullName.email}
      />
      <input
        type="text"
        placeholder="Enter your number"
        name="number"
        onChange={inputEvent}
        value={fullName.number}
      />
      <button onClick={onSubmit}>Click me for info</button>
    </div>
  );
}
