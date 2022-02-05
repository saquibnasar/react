import React from "react";
import Common from "./Common";
import img from "./Image/network.png";

export default function About() {
  return (
    <>
      <Common
        title="Welcome to About page"
        visit="/contact"
        btnTitle="Contact Now"
        img={img}
      />
    </>
  );
}
