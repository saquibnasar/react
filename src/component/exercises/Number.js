import React, { useState } from "react";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

function Number() {
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    if (num === 0) {
      alert("max decrement reached");
    } else {
      setNum(num - 1);
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="list">
          <h1>{num}</h1>
          <div className="btn_div">
            <Button variant="contained" onClick={incNum}>
              <AddIcon />
            </Button>
            <Button variant="contained" onClick={decNum}>
              <DeleteIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Number;
