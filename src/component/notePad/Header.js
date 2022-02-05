import React from "react";
import img1 from "../image/img1.png";

export default function Header() {
  return (
    <>
      <div className="header">
        <img src={img1} alt="logo" width="70" height="70" />
        <h1>S.Siddiqui</h1>
      </div>
    </>
  );
}
