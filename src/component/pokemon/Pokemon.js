import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Pokemon() {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [move, setMove] = useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setName(res.data.name);
      setMove(res.data.moves.length);
    }

    getData();
  });
  return (
    <>
      <h1>Pokedex number {num}</h1>
      <h1>
        My Pokemon's Name is <span style={{ color: "red" }}>{name}</span>
      </h1>
      <h1>
        My Pokemon's Have <span style={{ color: "red" }}>{move}</span> moves
      </h1>

      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="0">0</option>
        <option value="392">1</option>
        <option value="282">2</option>
        <option value="700">3</option>
        <option value="802">4</option>
        <option value="448">5</option>
      </select>
    </>
  );
}
