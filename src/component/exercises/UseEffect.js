import React, { useState, useEffect } from "react";

export default function UseEffect() {
  const [num, setNum] = useState(0);
  const button = () => {
    setNum(num + 1);
  };
  useEffect(() => {
    document.title = `React App ${num}`;
  });

  return (
    <div>
      <button onClick={button}>Click me {num}</button>
    </div>
  );
}
