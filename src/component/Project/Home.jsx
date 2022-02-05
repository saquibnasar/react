import React from "react";
import Common from "./Common";
import img from "./Image/Scenes08.svg";
export default function Home() {
  return (
    <Common
      title="Grow your business with"
      visit="/service"
      btnTitle="Get Started"
      img={img}
    />
  );
}
