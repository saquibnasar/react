import React, { useState } from "react";

export default function Event() {
  let purple = "#8e44ad";
  const [bg, setBg] = useState(purple);
  const [val, setVal] = useState("Click Me");

  const bgChange = () => {
    purple = "#34495e";
    setBg(purple);
    setVal("value change 👻");
  };
  const bgBack = () => {
    purple = "#8e44ad";
    setBg(purple);
    setVal("back normal 😁");
  };

  return (
    <div style={{ backgroundColor: bg }}>
      <button onClick={bgChange} onDoubleClick={bgBack}>
        {val}
      </button>
    </div>
  );
}
