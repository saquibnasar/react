import React, { useState } from "react";
import SearchFilter from "./SearchFilter";

export default function Search(Props) {
  const [img, setImg] = useState("");
  const eventListener = (event) => {
    const data = event.target.value;
    setImg(data);
  };
  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          value={img}
          onChange={eventListener}
          placeholder="Search"
        />
        <br />
        {img === "" ? null : <SearchFilter Data={img} />}
      </div>
    </>
  );
}
