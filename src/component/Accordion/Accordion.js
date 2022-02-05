import React, { useState } from "react";
import { questions } from "./api";
import MyAccordion from "./MyAccordion";

export default function Accordion() {
  const [data, setData] = useState(questions);
  return (
    <>
      <section className="main_div">
        <h1>React Project Questions</h1>
        {data.map((currentElment) => {
          return <MyAccordion key={currentElment.id} {...currentElment} />;
        })}
      </section>
    </>
  );
}
