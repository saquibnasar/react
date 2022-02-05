import React, { useState } from "react";

export default function Myaccordion({ question, answer }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="main_heading">
        <p
          variant="contained"
          className="btn_main"
          onClick={() => setShow(!show)}
        >
          {show ? "−" : "+"}
        </p>
        <h3>{question}</h3>
      </div>
      {show && <p className="answer">{answer}</p>}
    </>
  );
}
