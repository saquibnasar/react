import React from "react";

export default function SearchFilter(props) {
  const img = `https://source.unsplash.com/400x300?${props.Data}`;
  return (
    <>
      <img src={img} alt="image" />
    </>
  );
}
