import React, { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState();
  const [search, setSearch] = useState();
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input type="search" className="inputFeild" onChange={() => {}} />
        </div>

        <div className="info">
          <h2 className="location">
            <i class="fas fa-street-view"></i>Saquib
          </h2>
          <h1 className="temp">5.25Cel</h1>
          <h3 className="tempmin_max">Min : 5.25Cel | Max : 5.25Cel</h3>
        </div>
        <div className="wave-one wave"></div>
        <div className="wave-two wave"></div>
        <div className="wave-three wave"></div>
      </div>
    </>
  );
}
