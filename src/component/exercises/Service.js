import React from "react";
import { useLocation } from "react-router-dom";

export default function Service(props) {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1> {props.name} </h1>
      <p>{location.pathname}</p>
      {location.pathname === `/service/saquib` ? (
        <button onClick={() => alert("hello")}>onClick</button>
      ) : null}
    </>
  );
}
