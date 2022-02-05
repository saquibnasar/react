import React from "react";

export default function Footer() {
  const year = new Date().getFullYear;
  return (
    <>
      <footer className="">
        <p>copyright © {year}</p>
      </footer>
    </>
  );
}
