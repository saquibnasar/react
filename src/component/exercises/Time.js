import React, { useState } from "react";

function Time() {
  const [clock, setClock] = useState(new Date().toLocaleTimeString());
  const updateTime = () => {
    setClock(new Date().toLocaleTimeString());
  };
  setInterval(updateTime, 1000);

  return (
    <div>
      <h1>{clock}</h1>
    </div>
  );
}
export default Time;
